import React from 'react';
import {HOST, CLIENT_CANVAS_TEST, CLIENT_ID} from '../config.js';

const Home = () => {
  return ( 
    <div className="jumbotron">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-4"/>
      <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
      <a className="btn btn-primary" 
        href={`${CLIENT_CANVAS_TEST}/login/oauth2/auth?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${HOST}/profile`}>Login With Canvas</a>
    </div>
   );
}
 
export {Home};