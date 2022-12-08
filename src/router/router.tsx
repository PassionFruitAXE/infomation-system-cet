import Details from "@/pages/Details";
import Edit from "@/pages/Edit";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import SignUp from "@/pages/SignUp";
import { RouteObject, useRoutes } from "react-router-dom";
import { Suspense } from "react";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit",
    element: <Edit />,
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
