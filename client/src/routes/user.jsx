import Default from "@/layouts/Default";
import New from "@/pages/user/New";
import Auth from "@/pages/user/Auth";

export default {
  path: "user",
  element: <Default />,
  children: [
    {
      path: "auth",
      element: <Auth />,
    },
    {
      path: "new",
      element: <New />,
    },
  ],
};
