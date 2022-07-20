import React from "react";
import { useRoutes } from "react-router-dom";
const Home = React.lazy(() => import("@pages/Home"));
const Login = React.lazy(() => import("@pages/Login"));
const Profile = React.lazy(() => import("@pages/Profile"));
const SignUp = React.lazy(() => import("@pages/SignUp"));
const About = React.lazy(() => import("@pages/About"));
const NotFound = React.lazy(() => import("@components/NotFound"));
const AuthLayout = React.lazy(() => import("@components/Layout/AuthLayout"));
const MainLayout = React.lazy(() => import("@components/Layout/MainLayout"));

function Router() {
  let element = useRoutes([
    {
      // AuthLayout
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
    {
      // MainLayout
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        { path: "/about", element: <About /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
}

export default Router;
