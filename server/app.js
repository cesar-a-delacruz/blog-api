import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authenticationMiddleware from "./middlewares/authenticationMiddleware.js";

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT }));

app.post("/auth", authenticationMiddleware);

app.listen(process.env.APP_PORT, (error) => {
  if (error) throw error;
  console.log("running...");
});
