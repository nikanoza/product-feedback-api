import Joi from "joi";
import Comment from "../models/Comment.js";
import Feedback from "../models/Feedback.js";
import User from "../models/User.js";

const determineIfUserExists = (user) => (value, helpers) => {
  if (!user) {
    return helpers.message("there is no user with this id");
  }
  return value;
};

const determineIfFeedbackExits = (feedback) => (value, helpers) => {
  if (!feedback) {
    return helpers.message("there is no feedback with this id");
  }
  return value;
};

const determineIfCommentExists = (comment) => (value, helpers) => {
  if (!comment) {
    return helpers.message("there is no comment with this id");
  }
  return value;
};

const addReplaySchema = async (data) => {
  const user = await User.findOne({ id: data.userId });
  const feedback = await Feedback.findOne({ id: data.feedbackId });
  const comment = await Comment.findOne({ id: data.commentId });
  return Joi.object({
    content: Joi.string().min(4).required().messages({
      "string.base": "content should be a string",
      "string.min": "content should include 4 characters or more",
      "any.required": "content is required",
    }),
    feedbackId: Joi.number()
      .custom(determineIfFeedbackExits(feedback))
      .required()
      .messages({
        "number.base": "feedback id should be a number",
        "any.required": "feedback id is required",
      }),
    commentId: Joi.number()
      .custom(determineIfCommentExists(comment))
      .required()
      .messages({
        "number.base": "comment id should be a number",
        "any.required": "comment id is required",
      }),
    userId: Joi.number()
      .custom(determineIfUserExists(user))
      .required()
      .messages({
        "number.base": "user id should be a number",
        "any.required": "user id is required",
      }),
  });
};

export default addReplaySchema;
