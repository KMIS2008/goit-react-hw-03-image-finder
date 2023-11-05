// import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,

      }}
    >
      React homework template
      <GlobalStyle/>
    </div>
  );
};
