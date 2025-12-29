import User from "@/layouts/User";
import Index from "@/pages/post/Index";

export default {
  path: "post",
  element: <User />,
  children: [
    {
      index: true,
      element: <Index />,
    },
  ],
};
