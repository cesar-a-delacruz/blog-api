import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Default from "@/layouts/Default";
import Auth from "@/pages/Auth";
import Register from "@/pages/user/Register";
import user from "./user";
import post from "./post";
import comment from "./comment";

const routes = [
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
  {
    path: "/",
    element: <Default />,
    children: [
      { index: true, element: <Auth /> },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  user,
  post,
  comment,
];

export default createBrowserRouter(routes);
