import User from "@/layouts/User";
import Profile from "@/pages/user/Profile";

export default {
  path: "profile",
  element: <User />,
  children: [
    {
      index: true,
      element: <Profile />,
    },
  ],
};
