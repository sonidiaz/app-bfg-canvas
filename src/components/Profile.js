import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Alert, Card, Container, Row, Col} from 'react-bootstrap'
import queryString from 'query-string';
import { Link } from "react-router-dom";
import {HOST_API} from '../host_client.js';
import axios from 'axios';

const Profile = () => {
  let history = useHistory();
  const queryStringCustom = window.location.search.split('=')[0];
  const [ user, setUser ] = useState({});
  const [ coures, setCourses ] = useState([]);
  const [ noAuth, setNoAuth ] = useState(false);
  const [loader, setLoader] = useState(false);
  const codeOuth = () => queryString.parse(window.location.search).code;
  useEffect(() => {
    if(queryStringCustom.indexOf('error') > 0) {
      setNoAuth(true)
      return;
    }
    if(sessionStorage.getItem('refresh_token') === null) {
      const data = {
        code: codeOuth()
      }
      const getToken = async () => {
        const token = await axios.post(`${HOST_API}/api/login/oauth2/token/`, {data: data.code});
        getUser(token)
        sessionStorage.setItem('refresh_token', token.data.refresh_token)
      }
      getToken();
      history.push('/profile')
    } else {
      refreshToken()
    }
  }, []);
  const getUser = async (token) => {
    const {access_token} = token.data;
    const clienteUser = token.data.user;
    const userData = await axios.post(`${HOST_API}/api/user/profile/`, {
      data:{
        id: 3 || clienteUser.id,
        access_token: access_token
      }
    });
    const allCourse = await getUserCourses(access_token, user.id)

    setUser(userData.data)
    setCourses(allCourse.data)
  }
  const getUserCourses = async (token, id) => {
    const userDataCourse = await axios.post(`${HOST_API}/api/user/course/`, {
      data:{
        id: 3 || id,
        access_token: token
      }
    });
    return userDataCourse;
  }
  const refreshToken = async () => {
    const data = {
      refresh: sessionStorage.getItem('refresh_token')
    }
    const token = await axios.post(`${HOST_API}/api/login/oauth2/refresh_token/`, {data: data.refresh});
    getUser(token)
  }
  const noAuthComponent = () => (
    <Alert variant="danger">
      <Alert.Heading>Oh snap!</Alert.Heading>
      <p>
        No tienes autorización para obtener el contenido de Canvas
      </p>
    </Alert>
  )
  return (
    <>
      {noAuth 
        ? (noAuthComponent())
        : (
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={user.avatar_url} />
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Title>{user.primary_email}</Card.Title>
                    { coures.map((v,i) => <Card.Text key={i}>{v.name}</Card.Text>) }
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
      <Button variant="btn primary"><Link to="/">GO TO HOME </Link></Button>
    </>
   );
}
 
export {Profile};