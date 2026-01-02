import RESTController from "./RESTController.js";
export default class CommentController extends RESTController {
  findAll = async (req, res) => {
    try {
      let rows;
      rows = await this.model.findMany({
        where: {
          userId: Number(req.user.id),
        },
        include: {
          post: {
            select: {
              id: true,
              title: true,
            },
          },
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
