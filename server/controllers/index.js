import { PrismaClient } from "../generated/prisma/index.js";
import RESTController from "./RESTController.js";

const prisma = new PrismaClient();
export default {
  user: new RESTController(prisma.user, {
    username: "string",
    password: "string",
    role: "string",
  }),
  post: new RESTController(prisma.post, {
    title: "string",
    media: "string",
    description: "string",
    date: "date",
    access: "string",
    userId: "number",
  }),
  comment: new RESTController(prisma.comment, {
    content: "string",
    dateTime: "date",
    userId: "number",
    postId: "number",
  }),
};
