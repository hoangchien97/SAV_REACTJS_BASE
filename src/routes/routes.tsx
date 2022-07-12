import AuthLayout from "@components/Layout/AuthLayout";
import MainLayout from "@components/Layout/MainLayout";
import NotFound from "@components/NotFound";
import About from "@pages/About";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Profile from "@pages/Profile";
import SignUp from "@pages/SignUp";
import { useRoutes } from "react-router-dom";

function Router() {
  let element = useRoutes([
    {
      // AuthLayout
      element: <AuthLayout />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
    {
      // MainLayout
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "about", element: <About /> },
        { path: "profile", element: <Profile /> },
      ],
    },
    {
      path: "401",
      element: <p>No Authorization Found</p>,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
}

export default Router;
