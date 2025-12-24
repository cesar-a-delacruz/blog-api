import { checkSchema } from "express-validator";
import validationHelper from "../utils/validationHelper.js";

const baseSchema = {
  username: {
    trim: true,
    isAlpha: {
      errorMessage: "username " + validationHelper.errorMessages.alpha,
    },
    isLength: {
      options: {
        min: 5,
        max: 25,
      },
      errorMessage: "username must be between 5 and 25 characters long",
    },
  },
  password: {
    trim: true,
    isLength: {
      options: {
        min: 5,
        max: 10,
      },
      errorMessage: "password must be between 5 and 10 characters long",
    },
  },
  role: {
    optional: true,
    enumVals: {
      custom: (value) =>
        validationHelper.customCallbacks.enum(value, ["AUTHOR", "READER"]),
      errorMessage: "role must be either AUTHOR or READER",
    },
  },
};

const createSchema = { ...baseSchema };
const updateSchema = { ...baseSchema };
updateSchema.username.optional = true;
updateSchema.password.optional = true;

const createValidation = checkSchema(createSchema);
const updateValidation = checkSchema(updateSchema);

export default [createValidation, updateValidation];
