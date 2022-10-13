import express from "express";
import { addUser, getUsers } from "../controllers/user-controller.js";
import multer from "multer";

const userRouter = express.Router();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/storage");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

userRouter.get("/users", getUsers);
userRouter.post("/users/new",multer({ storage: fileStorage, fileFilter}).single('avatar'), addUser);

export default userRouter;
