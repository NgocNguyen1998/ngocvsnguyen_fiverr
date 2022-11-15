import { useRoutes } from "react-router-dom";
import { JobList } from "../components/JobList";

const Router = () => {
  const routing = useRoutes([{ path: "/jobList", element: <JobList /> }]);

  return routing;
};

export default Router;
