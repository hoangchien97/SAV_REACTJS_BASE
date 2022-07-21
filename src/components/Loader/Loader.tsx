import React from 'react';
// import logo from '@/logo.svg';

const Loader = () => {
  return (
    // loading component for suspense fallback
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div>Loading...</div>
    </div>
  );
};

export default Loader;
