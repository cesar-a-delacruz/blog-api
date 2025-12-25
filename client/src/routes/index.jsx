import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Default from "@/layouts/Default";
import Auth from "@/pages/Auth";
import Register from "@/pages/user/Register";

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
];

export default createBrowserRouter(routes);
