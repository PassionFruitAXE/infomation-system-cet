import Details from "@/pages/Details";
import Forget from "@/pages/Home/Forget";
import Home from "@/pages/Home";
import Layout from "@/Layout";
import Login from "@/pages/Home/Login";
import Register from "@/pages/Home/Register";
import SignUp from "@/pages/SignUp";
import { RouteObject, useRoutes } from "react-router-dom";
import { Suspense } from "react";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget",
        element: <Forget />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/details",
    element: <Details />,
  },
];

const Router = () => {
  const router = useRoutes(routes);
  return (
    <Suspense>
      <Layout>{router ?? <></>}</Layout>
    </Suspense>
  );
};

export default Router;
