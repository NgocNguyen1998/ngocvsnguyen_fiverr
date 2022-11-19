import { useRoutes } from "react-router-dom";
import { JobDetail } from "../components/JobDetail/JobDetail";
import { JobList } from "../components/JobList";
import MainLayout from "../components/layouts/MainLayout";

const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "jobList", element: <JobList /> },
        { path: "jobDetail/:id", element: <JobDetail /> },
      ],
    },
  ]);

  return routing;
};

export default Router;
