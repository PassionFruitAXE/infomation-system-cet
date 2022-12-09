import Account from "@/pages/Account";
import Details from "@/pages/Home/Details";
import Edit from "@/pages/Home/Edit";
import Forget from "@/pages/Account/Forget";
import Home from "@/pages/Home";
import Login from "@/pages/Account/Login";
import Register from "@/pages/Account/Register";
import SignUp from "@/pages/Home/SignUp";
import { FC, Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Account />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forget",
        element: <Forget />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Details />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
];

const Router: FC = () => {
  const router = useRoutes(routes);
  return <Suspense>{router}</Suspense>;
};

export default Router;
