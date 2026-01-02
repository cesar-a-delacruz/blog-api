import { PrismaClient } from "../generated/prisma/index.js";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function (req, res) {
  const { username, password } = req.body;

  const user = await new PrismaClient().user.findFirst({
    where: { username: username },
  });
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }
  const match = await compare(password, user.password);
  if (!match) {
    return res.status(401).json({ error: "Incorrect credentials" });
  }

  const payload = { id: user.id, username: user.username, role: user.role };
  const token = jwt.sign(payload, "secret");
  return res
    .status(200)
    .json({ message: "Successful authentication", token: token });
}
