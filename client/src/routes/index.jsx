import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import user from "./user";
import Default from "@/layouts/Default";
import Auth from "@/pages/Auth";

const routes = [
  user,
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
  {
    path: "/",
    element: <Default />,
    children: [{ path: "auth", element: <Auth /> }],
  },
];

export default createBrowserRouter(routes);
