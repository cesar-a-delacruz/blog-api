import path from "path";
import dotenv from "dotenv";
import multer from "multer";
import { v2 as cloudinaryV2 } from "cloudinary";

dotenv.config();

cloudinaryV2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});
export { cloudinaryV2 };
export const upload = multer({
  storage: multer.memoryStorage({
    destination: async (req, file, cb) => {
      console.log(req);
      await cloudinaryV2.api
        .search_folders(`name=${req.user.id} AND path:blog-api/`)
        .catch(async (err) => {
          await cloudinaryV2.api.create_folder(`blog-api/${req.user.id}`);
        });
    },
    filename: (req, file, cb) => {
      console.log(req);
      const extension = path.extname(file.originalname);
      const name = req.body.id;
      req.ext = extension;
      cb(null, name + extension);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});
