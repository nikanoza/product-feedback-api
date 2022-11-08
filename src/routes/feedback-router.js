import express from "express";
import {
  addFeedback,
  getAllFeedbacks,
  getSingleFeedback,
} from "../controllers/feedback-controller.js";

const feedbackRouter = express.Router();

feedbackRouter.get("/feedbacks", getAllFeedbacks);
feedbackRouter.get("/feedbacks/:id", getSingleFeedback);
feedbackRouter.post("/feedbacks/new", addFeedback);

export default feedbackRouter;
