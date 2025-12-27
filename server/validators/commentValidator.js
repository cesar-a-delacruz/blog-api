import { checkSchema } from "express-validator";
import validationHelper from "../utils/validationHelper.js";

const baseSchema = {
  content: {
    trim: true,
    isLength: {
      options: {
        min: 1,
        max: 100,
      },
      errorMessage: "content must be between 1 and 100 characters long",
    },
  },
  dateTime: {
    optional: true,
    dateTime: {
      custom: (value) => validationHelper.customCallbacks.dateTime(value),
      errorMessage: "dateTime must follow the format yyyy-mm-ddThh:mm:ss",
    },
  },
};

const createSchema = { ...baseSchema };
createSchema.userId = {
  notEmpty: {
    errorMessage: "userId " + validationHelper.empty,
  },
};
createSchema.postId = {
  notEmpty: {
    errorMessage: "postId " + validationHelper.empty,
  },
};
const updateSchema = { ...baseSchema };
updateSchema.content.optional = true;

export default {
  create: checkSchema(createSchema),
  update: checkSchema(updateSchema),
};
