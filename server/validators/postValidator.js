import { body } from "express-validator";
import validationHelper from "../utils/validationHelper.js";

export default [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("title " + validationHelper.errorMessages.empty)
    .isLength({ min: 10, max: 50 })
    .withMessage("title must be between 10 and 50 characters long"),
  body("media")
    .optional()
    .isURL()
    .withMessage("media " + validationHelper.errorMessages.url),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("description " + validationHelper.errorMessages.empty)
    .isLength({ min: 2, max: 200 })
    .withMessage("title must be between 2 and 200 characters long"),
  ,
  body("date")
    .trim()
    .notEmpty()
    .withMessage("date " + validationHelper.errorMessages.empty)
    .isDate()
    .withMessage("date must follow the format yyyy-mm-dd"),
  body("access")
    .optional()
    .custom((value) =>
      validationHelper.customCallbacks.enum(value, ["PUBLIC", "PRIVATE"])
    )
    .withMessage("access must be either PUBLIC or PRIVATE"),
  body("userId")
    .trim()
    .notEmpty()
    .withMessage("userId " + validationHelper.empty),
];
