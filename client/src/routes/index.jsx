import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import user from "./user";

const routes = [
  user,
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
];

export default createBrowserRouter(routes);
