import Account from "@/pages/Account";
import Details from "@/pages/Home/Details";
import Edit from "@/pages/Home/Edit";
import Exam from "@/pages/Home/Exam";
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
        element: <Exam />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "details",
        element: <Details />,
      },
    ],
  },
];

const Router: FC = () => {
  const router = useRoutes(routes);
  return <Suspense>{router}</Suspense>;
};

export default Router;
