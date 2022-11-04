import express from "express";
import { addComment, addReplay } from "../controllers/comment-controller.js";

const commentRouter = express.Router();

commentRouter.post("/comment", addComment);
commentRouter.post("/replay", addReplay);

export default commentRouter;
