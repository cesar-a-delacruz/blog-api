import userValidator from "./userValidator.js";
import postValidator from "./postValidator.js";
import commentValidator from "./commentValidator.js";

export default {
  user: userValidator,
  post: postValidator,
  comment: commentValidator,
};
