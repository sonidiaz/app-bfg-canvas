import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import {NoAuthComponent} from '../components/NoAuthComponent';
import {HOST_API} from '../config.js';
import { SpinnerRoundOutlined } from 'spinners-react';
import axios from 'axios';
import {Account} from '../components/Account';

const Profile = () => {
  let history = useHistory();
  const queryStringCustom = window.location.search.split('=')[0];
  const [ user, setUser ] = useState({});
  const [ courses, setCourses ] = useState([]);
  const [ noAuth, setNoAuth ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  const codeOuth = () => queryString.parse(window.location.search).code;
  useEffect(() => {
    if(queryStringCustom.indexOf('error') > 0) {
      setNoAuth(true)
      return;
    }
    if(sessionStorage.getItem('refresh_token') === null) {
      getToken();
      history.push('/profile')
    } else {
      refreshToken()
    }
  }, []);
  const data = {
    code: codeOuth()
  }
  const getToken = async () => {
    const token = await axios.post(`${HOST_API}/api/login/oauth2/token/`, {data: data.code});
    getUser(token)
    sessionStorage.setItem('refresh_token', token.data.refresh_token)
  }
  const refreshToken = async () => {
    const data = {
      refresh: sessionStorage.getItem('refresh_token')
    }
    const token = await axios.post(`${HOST_API}/api/login/oauth2/refresh_token/`, {data: data.refresh});
    getUser(token)
  }
  const getUser = async (token) => {
    setLoading(true);
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
    setLoading(false);
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
  const displayAccount = () => {
    return !loading 
            ? <Account user={user} courses={courses} /> 
            : <div className="text-center mt-12"> <SpinnerRoundOutlined thickness="100" color='#5057c9' size='10%' /> </div>
  }
  return ( 
    <>
      {
        noAuth 
        ? ( NoAuthComponent() ) 
        : ( displayAccount() )
      }
    </>
   );
}
 
export {Profile};