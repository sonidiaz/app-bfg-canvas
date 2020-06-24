// @flow 
import React from 'react';
import logo from '../Beforget_logo_white2.png'
import '../App.css';

const Header = ({children}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark justify-content-between d-flex">
        <div className="container-fluid">
          <div className="col-md-2 pt-2 pb-2">
						<img src={logo} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-9">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
    </nav>
  );
};

export {Header};