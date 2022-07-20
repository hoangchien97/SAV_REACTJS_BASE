import React, { Suspense, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './i18n/config';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/routes';
import 'antd/dist/antd.min.css';
import { useAppDispatch } from '@store/hooks';
import { commonActions } from '@store/slices/common';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastStyled = styled(ToastContainer)``;

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('innerWidth', window.innerWidth + 'px');
    dispatch(commonActions.setViewPort(window.innerWidth));
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <ToastStyled
          position="top-right"
          hideProgressBar
          closeOnClick={false}
          closeButton={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
        />
      </div>
    </Suspense>
  );
}

export default App;
