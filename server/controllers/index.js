import { PrismaClient } from "../generated/prisma/index.js";
import validators from "../validators/index.js";
import UserController from "./UserController.js";
import PostController from "./PostController.js";
import CommentController from "./CommentController.js";

const prisma = new PrismaClient();
export default {
  user: new UserController(
    prisma.user,
    {
      username: "string",
      password: "string",
      role: "string",
    },
    validators.user
  ),
  post: new PostController(
    prisma.post,
    {
      title: "string",
      media: "string",
      description: "string",
      date: "date",
      access: "string",
      userId: "number",
    },
    validators.post
  ),
  comment: new CommentController(
    prisma.comment,
    {
      content: "string",
      dateTime: "date",
      userId: "number",
      postId: "number",
    },
    validators.comment
  ),
};
