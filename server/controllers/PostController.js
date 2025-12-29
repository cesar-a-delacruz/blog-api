import RESTController from "./RESTController.js";
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
}
