// @flow 
import React from 'react';

const Header = ({children}) => {
  return (
    <header className="App-header text-center">
      {children}
    </header>
  );
};

export {Header};