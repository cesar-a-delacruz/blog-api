import User from "@/layouts/User";
import Index from "@/pages/post/Index";
import View from "@/pages/post/View";

export default {
  path: "post",
  element: <User />,
  children: [
    {
      index: true,
      element: <Index />,
    },
    {
      path: ":id",
      element: <View />,
    },
  ],
};
