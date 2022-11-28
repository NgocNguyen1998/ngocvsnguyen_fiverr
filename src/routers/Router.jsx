import { Navigate, useRoutes } from "react-router-dom";
import { JobDetail } from "../components/JobDetail/JobDetail";
import { JobList } from "../components/JobList";
import MainLayout from "../components/layouts/MainLayout";
import AdminTemplate from "../components/template/AdminTemplate/AdminTemplate";
import JobManagement from "../pages/admin/jobManagement/JobManagement";
import { JobTypeManagement } from "../pages/admin/jobTypeManagement/JobTypeManagement";
import AddUser from "../pages/admin/userManagement/AddUser";
import EditUser from "../pages/admin/userManagement/EditUser";
import UserManagement from "../pages/admin/userManagement/UserManagement";
import Categories from "../pages/categories/Categories";
import Home from "../pages/home/Home";
import InfoUser from "../pages/infoUser/InfoUser";

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
        { path: "categories/:ids", element: <Categories /> },
        { path: "infoUser/:idUser", element: <InfoUser /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminTemplate />,
      children: [
        { path: "", element: <Navigate to="/admin/userManagement" /> },
        { path: "userManagement", element: <UserManagement /> },
        { path: "editUser/:id", element: <EditUser /> },
        { path: "addUser", element: <AddUser /> },
        {
          path: "jobType",
          element: <JobTypeManagement />,
        },
        {
          path: "workFlow",
          element: <JobManagement />,
        },
      ],
    },
  ]);

  return routing;
};

export default Router;
