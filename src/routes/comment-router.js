import express from 'express';
import { addComment } from '../controllers/comment-controller.js';

const commentRouter = express.Router();

commentRouter.post("/comment", addComment);

export default commentRouter;