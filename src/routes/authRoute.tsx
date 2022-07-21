import React from 'react';

const Login = React.lazy(() => import('@pages/Login'));
const SignUp = React.lazy(() => import('@pages/SignUp'));

const authRoute = [
  { path: 'login', element: <Login /> },
  { path: 'signup', element: <SignUp /> },
];

export default authRoute;
