import RESTController from "./RESTController.js";
export default class PostController extends RESTController {
  findAll = async (req, res) => {
    try {
      const rows = await this.model.findMany({
        where: {
          access: "PUBLIC",
        },
      });
      console.table(rows);
      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch items" });
    }
  };
}
