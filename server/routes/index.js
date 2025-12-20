import RESTRouter from "./RESTRouter.js";
import controllers from "../controllers/index.js";

export default {
  user: new RESTRouter("user", controllers.user),
  post: new RESTRouter("post", controllers.post),
  comment: new RESTRouter("comment", controllers.comment),
};
