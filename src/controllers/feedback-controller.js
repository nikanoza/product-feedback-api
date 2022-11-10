import Comment from "../models/Comment.js";
import Feedback from "../models/Feedback.js";
import Replay from "../models/Replay.js";
import addFeedbackSchema from "../schemas/add-feedback-schema.js";
import updateFeedbackSchema from "../schemas/update-feedback-schema.js";

export const getAllFeedbacks = async (_, res) => {
  const data = await Feedback.find();
  const newData = data.map((feedback) => {
    return {
      id: feedback.id,
      category_id: feedback.category_id,
      status_id: feedback.status_id,
      description: feedback.description,
      upvotes: feedback.upvotes,
      commentAmount: feedback.commentAmount,
      title: feedback.title,
    };
  });
  return res.json(newData);
};

export const addFeedback = async (req, res) => {
  const { body } = req;

  const validator = await addFeedbackSchema(body);
  const { value, error } = validator.validate(body);

  if (error) {
    return res.status(401).json(error.details);
  }

  const { title, description, category_id } = value;

  const lastFeedback = await Feedback.find().sort({ _id: -1 }).limit(1);

  const id = lastFeedback.length > 0 ? lastFeedback[0].id + 1 : 1;

  const newFeedback = {
    title,
    description,
    category_id,
    upvotes: 0,
    commentAmount: 0,
    status_id: 1,
    id,
  };

  await Feedback.create({ ...newFeedback });

  return res.status(201).json({ ...newFeedback });
};

export const getSingleFeedback = async (req, res) => {
  const { id } = req.params;
  const feedback = await Feedback.findOne({ id: +id });

  if (!feedback) {
    return res
      .status(401)
      .json({ message: "there is no feedback with this id" });
  }

  const comments = await Comment.find({ feedbackId: +id });
  const allReplies = await Replay.find();
  const newComments = comments.map((comment) => {
    const replies = allReplies.filter(
      (replay) => replay.commentId === comment.id
    );
    const newReplies = replies.map((replay) => {
      return {
        content: replay.content,
        replyingTo: replay.replyingTo,
        feedbackId: replay.feedbackId,
        commentId: replay.commentId,
        userId: replay.userId,
        id: replay.id,
      };
    });
    return {
      content: comment.content,
      feedbackId: comment.feedbackId,
      userId: comment.userId,
      id: comment.id,
      replies: newReplies,
    };
  });

  const newFeedback = {
    title: feedback.title,
    category_id: feedback.category_id,
    status_id: feedback.status_id,
    description: feedback.description,
    commentAmount: feedback.commentAmount,
    upvotes: feedback.upvotes,
    id: feedback.id,
    comments: newComments,
  };

  return res.status(200).json(newFeedback);
};

export const updateFeedback = async (req, res) => {
  const { body } = req;

  const validator = await updateFeedbackSchema(body);
  const { value, error } = validator.validate(body);

  if (error) {
    return res.status(401).json(error.details);
  }

  const { title, description, category_id, status_id, id } = value;

  await Feedback.findOneAndUpdate(
    { id },
    {
      title,
      description,
      category_id,
      status_id,
    }
  );

  return res.status(200).json({ message: "feedback updated successfully" });
};

export const deleteFeedback = async (req, res) => {
  const { id } = req.params;

  const feedback = await Feedback.findOne({ id: +id });
  if (!feedback) {
    return res
      .status(401)
      .json({ message: "there is no feedback with this id" });
  }

  await feedback.delete();

  return res.status(200).json({ message: "feedback deleted successfully" });
};
