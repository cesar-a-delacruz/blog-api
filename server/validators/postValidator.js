import { checkSchema } from "express-validator";
import validationHelper from "../utils/validationHelper.js";

const baseSchema = {
  title: {
    trim: true,
    isLength: {
      options: {
        min: 10,
        max: 50,
      },
      errorMessage: "title must be between 10 and 50 characters long",
    },
  },
  media: {
    optional: true,
    isURL: {
      errorMessage: "media " + validationHelper.errorMessages.url,
    },
  },
  description: {
    trim: true,
    isLength: {
      options: {
        min: 2,
        max: 200,
      },
      errorMessage: "description must be between 2 and 200 characters long",
    },
  },
  date: {
    trim: true,
    isDate: {
      errorMessage: "date must follow the format yyyy-mm-dd",
    },
  },
  access: {
    optional: true,
    enumVals: {
      custom: (value) =>
        validationHelper.customCallbacks.enum(value, ["PUBLIC", "PRIVATE"]),
      errorMessage: "access must be either PUBLIC or PRIVATE",
    },
  },
};

const createSchema = { ...baseSchema };
createSchema.userId = {
  notEmpty: {
    errorMessage: "userId " + validationHelper.empty,
  },
};
const updateSchema = { ...baseSchema };
updateSchema.title.optional = true;
updateSchema.description.optional = true;

const createValidation = checkSchema(createSchema);
const updateValidation = checkSchema(updateSchema);

export default [createValidation, updateValidation];
