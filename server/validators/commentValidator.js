import { body } from "express-validator";
import validationHelper from "../utils/validationHelper.js";

export default [
  body("content")
    .trim()
    .notEmpty()
    .withMessage("content " + validationHelper.errorMessages.empty)
    .isLength({ min: 1, max: 100 })
    .withMessage("content must be between 1 and 100 characters long"),
  body("dateTime")
    .trim()
    .notEmpty()
    .withMessage("dateTime " + validationHelper.errorMessages.empty)
    .custom((value) => validationHelper.customCallbacks.dateTime(value))
    .withMessage("dateTime must follow the format yyyy-mm-ddThh:mm:ss"),
  body("userId")
    .trim()
    .notEmpty()
    .withMessage("userId " + validationHelper.errorMessages.empty),
  body("postId")
    .trim()
    .notEmpty()
    .withMessage("postId " + validationHelper.errorMessages.empty),
];
