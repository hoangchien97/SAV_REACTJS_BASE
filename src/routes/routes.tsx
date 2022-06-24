import AuthLayout from "@/components/Layout/AuthLayout";
import MainLayout from "@/components/Layout/MainLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import SignUp from "@/pages/SignUp";
import { useRoutes } from "react-router-dom";

// Public routes
// const publicRoutes = [
//   { path: "/", component: Home },
//   { path: "/about", component: About },
//   {
//     path: "/profile/@:name",
//     component: Profile,
//     children: [{ path: "/", element: Login }],
//   },
//   { path: "/upload", component: Upload, layout: HeaderOnly },
//   { path: "login", component: Login, layout: null },
// ];

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
  ]);

  return element;
}

export default Router;
