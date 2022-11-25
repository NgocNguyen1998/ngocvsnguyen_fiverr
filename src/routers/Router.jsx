import { Navigate, useRoutes } from "react-router-dom";
import { JobDetail } from "../components/JobDetail/JobDetail";
import { JobList } from "../components/JobList";
import MainLayout from "../components/layouts/MainLayout";
import Categories from "../pages/categories/Categories";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";

const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "jobList/:jobName", element: <JobList /> },
        { path: "jobDetail/:id", element: <JobDetail /> },
        { path: "", element: <Navigate to="home" /> },
        { path: "home", element: <Home /> },
        { path: "categories", element: <Categories /> },
      ],
    },
  ]);

  return routing;
};

export default Router;
