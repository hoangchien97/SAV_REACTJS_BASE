import React from 'react';
import { useRoutes } from 'react-router-dom';
import authRoute from './authRoute';
import mainRoute from './mainRoute';
const NotFound = React.lazy(() => import('@components/NotFound'));
const AuthLayout = React.lazy(() => import('@components/Layout/AuthLayout'));
const MainLayout = React.lazy(() => import('@components/Layout/MainLayout'));

function Routes() {
  let element = useRoutes([
    // AuthLayout
    {
      element: <AuthLayout />,
      children: authRoute,
    },
    // MainLayout
    {
      element: <MainLayout />,
      children: mainRoute,
    },
    // Not Found
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return element;
}

export default Routes;
