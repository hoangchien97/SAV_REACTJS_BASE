import React, { Suspense } from 'react';
import './App.css';
import './i18n/config';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import Routes from './routes/routes';
import 'antd/dist/antd.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '@components/Loading';
import { history } from '@utils/history';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <HistoryRouter history={history}>
          <Routes />
        </HistoryRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </Suspense>
  );
}

export default App;
