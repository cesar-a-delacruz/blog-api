import { body } from "express-validator";
import validationHelper from "../utils/validationHelper.js";

export default [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username " + validationHelper.errorMessages.empty)
    .isAlpha()
    .withMessage("username " + validationHelper.errorMessages.alpha)
    .isLength({ min: 5, max: 25 })
    .withMessage("username must be between 5 and 25 characters long"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("password " + validationHelper.errorMessages.empty)
    .isLength({ min: 5, max: 10 })
    .withMessage("password must be between 5 and 10 characters long"),
  body("role")
    .optional()
    .custom((value) =>
      validationHelper.customCallbacks.enum(value, ["AUTHOR", "READER"])
    )
    .withMessage("role must be either AUTHOR or READER"),
];
