import autorizationMiddleware from "../middlewares/autorizationMiddleware.js";
import BaseRouter from "./BaseRouter.js";

export default class UserRouter extends BaseRouter {
  constructor(basePath, controller) {
    super(basePath, controller);

    this.router.post("/", this.controller.create);
    this.router.get("/:id", autorizationMiddleware, this.controller.findOne);
    this.router.put("/:id", autorizationMiddleware, this.controller.update);
    this.router.delete("/:id", autorizationMiddleware, this.controller.delete);
  }
}
