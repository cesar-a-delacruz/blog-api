import { PrismaClient } from "../generated/prisma/index.js";
import RESTController from "./RESTController.js";
import validators from "../validators/index.js";
import UserController from "./UserController.js";

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
  post: new RESTController(
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
  comment: new RESTController(
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
