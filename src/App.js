import React from 'react';
import { Header } from './components/Headers'
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Profile} from './components/Profile'
import {Container, Col, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {HOST, BFG_CANVAS_TEST, CLIENT_ID} from './host_client.js';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Container className="p-3">
              <Jumbotron className="text-center">
                <Row>
                  <Col >
                    <a className="btn btn-primary" 
                        href={`${BFG_CANVAS_TEST}/login/oauth2/auth?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${HOST}/profile`}>Login With Canvas</a>
                  </Col>
                </Row>
              </Jumbotron>
            </Container>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
