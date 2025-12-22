import { PrismaClient } from "../generated/prisma/index.js";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function (req, res) {
  const { username, password } = req.body;

  const user = await new PrismaClient().user.findFirst({
    where: { username: username },
  });
  if (!user) {
    res.status(401).json({ error: "User not found" });
    return;
  }
  const match = await compare(password, user.password);
  if (!match) {
    res.status(401).json({ error: "Incorrect credentials" });
  }

  const payload = { id: user.id, username: user.username, role: user.role };
  const token = jwt.sign(payload, "secret");
  res.status(200).json({ message: "Successful authentication", token: token });
}
