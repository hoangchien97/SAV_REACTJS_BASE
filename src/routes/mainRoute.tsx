import React from 'react';
const Home = React.lazy(() => import('@pages/Home'));
const Profile = React.lazy(() => import('@pages/Profile'));
const About = React.lazy(() => import('@pages/About'));

const mainRoute = [
  {
    path: '/',
    element: <Home />,
  },
  { path: '/about', element: <About /> },
  { path: '/profile', element: <Profile /> },
];

export default mainRoute;
