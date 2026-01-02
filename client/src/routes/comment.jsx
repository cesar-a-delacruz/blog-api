import User from "@/layouts/User";
import UserComments from "@/pages/comment/UserComments";

export default {
  path: "comment",
  element: <User />,
  children: [
    {
      index: true,
      element: <UserComments />,
    },
    {
      path: "mine",
      element: <UserComments />,
    },
  ],
};
