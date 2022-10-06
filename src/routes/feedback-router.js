import express from "express";
import {
  addFeedback,
  getAllFeedbacks,
} from "../controllers/feedback-controller.js";

const feedbackRouter = express.Router();

feedbackRouter.get("/feedbacks", getAllFeedbacks);
feedbackRouter.post("/feedbacks/new", addFeedback);

export default feedbackRouter;
