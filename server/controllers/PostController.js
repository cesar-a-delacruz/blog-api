import RESTController from "./RESTController.js";
import fileMiddleware from "../middlewares/fileMiddleware.js";
import { cloudinaryV2 as cloudinary } from "../utils/fileParser.js";
import { validationResult } from "express-validator";

export default class PostController extends RESTController {
  findAll = async (req, res) => {
    try {
      let rows;
      if (req.query.q === "mine") {
        rows = await this.model.findMany({
          where: {
            userId: Number(req.user.id),
          },
        });
      } else {
        rows = await this.model.findMany({
          where: {
            access: "PUBLIC",
          },
        });
      }
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
        include: {
          comments: {
            include: {
              user: {
                select: {
                  username: true,
                },
              },
            },
          },
        },
      });
      console.info(row);
      res.status(200).json(row);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch item" });
    }
  };
  create = [
    this.validator.create,
    fileMiddleware,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json(errors.mapped());

      try {
        const data = this.dataParser.run(req.body);
        data.media =
          "https://res.cloudinary.com/dbjffqlow/image/upload/v1760113651/" +
          req.public_id;
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
    this.validator.update,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json(errors.mapped());

      try {
        const { media, ...data } = this.dataParser.run(req.body);
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
  delete = async (req, res) => {
    try {
      const row = await this.model.delete({
        where: { id: Number(req.params.id) },
      });
      await cloudinary.uploader.destroy(
        `blog-api/${req.user.id}/posts/${row.media.substring(
          row.media.lastIndexOf("/") + 1
        )}`
      );
      console.log(row);
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete item" });
    }
  };
}
