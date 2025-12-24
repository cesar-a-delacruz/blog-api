import RESTController from "./RESTController.js";
import { hash } from "bcryptjs";
import { validationResult } from "express-validator";

export default class UserController extends RESTController {
  create = [
    this.validator,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json(errors.mapped());

      const data = this.dataParser.run(req.body);
      data.password = await hash(data.password, 10);

      try {
        const row = await this.model.create({
          data: data,
        });
        console.log(row);
        res.status(201).json({ message: "Item created successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create item" });
      }
    },
  ];
  update = [
    this.validator,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json(errors.mapped());

      const data = this.dataParser.run(req.body);
      if (data.password) data.password = await hash(data.password, 10);

      try {
        const row = await this.model.update({
          where: { id: Number(req.params.id) },
          data: data,
        });
        console.log(row);
        res.status(204).end();
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update item" });
      }
    },
  ];
}
