import autorizationMiddleware from "../middlewares/autorizationMiddleware.js";
import BaseRouter from "./BaseRouter.js";

export default class RESTRouter extends BaseRouter {
  constructor(basePath, controller) {
    super(basePath, controller);

    this.router.get("/", autorizationMiddleware, controller.findAll);
    this.router.get("/:id", autorizationMiddleware, controller.findOne);
    this.router.post("/", autorizationMiddleware, controller.create);
    this.router.put("/:id", autorizationMiddleware, controller.update);
    this.router.delete("/:id", autorizationMiddleware, controller.delete);
  }
}
