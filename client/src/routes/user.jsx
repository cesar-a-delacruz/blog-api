import Default from "@/layouts/Default";
import New from "@/pages/user/New";

export default {
  path: "user",
  element: <Default />,
  children: [
    {
      path: "new",
      element: <New />,
    },
  ],
};
