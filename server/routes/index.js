import RESTRouter from "./RESTRouter.js";
import controllers from "../controllers/index.js";
import UserRouter from "./UserRouter.js";

export default {
  user: new UserRouter("user", controllers.user),
  post: new RESTRouter("post", controllers.post),
  comment: new RESTRouter("comment", controllers.comment),
};
