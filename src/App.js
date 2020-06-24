import React from 'react';
import { Header } from './components/Headers'
import {Profile} from './pages/Profile';
import {Home} from './pages/Home'
import {User} from './pages/User'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/user/create">
            <User />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
