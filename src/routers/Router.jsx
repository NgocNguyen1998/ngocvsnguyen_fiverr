import { Navigate, useRoutes } from "react-router-dom";
import { JobDetail } from "../components/JobDetail/JobDetail";
import { JobList } from "../components/JobList";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/Home";

const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "jobList", element: <JobList /> },
        { path: "jobDetail/:id", element: <JobDetail /> },
        { path: "", element:<Navigate to="home" />},
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ]);

  return routing;
};

export default Router;
