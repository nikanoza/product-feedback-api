import express from "express";
import {
  addFeedback,
  getAllFeedbacks,
  getSingleFeedback,
  updateFeedback,
} from "../controllers/feedback-controller.js";

const feedbackRouter = express.Router();

feedbackRouter.get("/feedbacks", getAllFeedbacks);
feedbackRouter.get("/feedbacks/:id", getSingleFeedback);
feedbackRouter.post("/feedbacks/new", addFeedback);
feedbackRouter.put("/feedback", updateFeedback);

export default feedbackRouter;
