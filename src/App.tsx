import React, { Suspense } from 'react';
import './App.css';
import './i18n/config';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import Routes from './routes/routes';
import 'antd/dist/antd.min.css';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '@components/Loading';
import { history } from '@utils/history';

const ToastStyled = styled(ToastContainer)`
  .Toastify__toast {
    padding: 0;
    .Toastify__toast-body {
      padding: 0;
      margin: 0;
      align-items: normal;
    }
  }
`;

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <HistoryRouter history={history}>
          <Routes />
        </HistoryRouter>
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
