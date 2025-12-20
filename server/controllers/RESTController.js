import BaseController from "./BaseController.js";

export default class RESTController extends BaseController {
  constructor(model, fields) {
    super(model, fields);
  }

  findAll = async (req, res) => {
    try {
      const rows = await this.model.findMany();
      console.table(rows);
      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch items" });
    }
  };
  findOne = async (req, res) => {
    try {
      const row = await this.model.findUnique({
        where: { id: Number(req.params.id) },
      });
      console.info(row);
      res.status(200).json(row);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch item" });
    }
  };
  create = async (req, res) => {
    try {
      const row = await this.model.create({
        data: this.dataParser.run(req.body),
      });
      console.log(row);
      res.status(201).json({ message: "Item created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create item" });
    }
  };
  update = async (req, res) => {
    try {
      const row = await this.model.update({
        where: { id: Number(req.params.id) },
        data: this.dataParser.run(req.body),
      });
      console.log(row);
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update item" });
    }
  };
  delete = async (req, res) => {
    try {
      const row = await this.model.delete({
        where: { id: Number(req.params.id) },
      });
      console.log(row);
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete item" });
    }
  };
}
