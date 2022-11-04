import Comment from "../models/Comment.js";
import Feedback from "../models/Feedback.js";
import Replay from "../models/Replay.js";
import addCommentSchema from "../schemas/add-comment-schema.js";
import addReplaySchema from "../schemas/add-replay-schema.js";

export const addComment = async (req, res) => {
  const { body } = req;

  const validator = await addCommentSchema(body);
  const { value: data, error } = validator.validate(body);
  if (error) {
    return res.status(401).json(error.details);
  }
  const { content, feedbackId, userId } = data;

  const lastComment = await Comment.find().sort({ _id: -1 }).limit(1);
  const id = lastComment.length > 0 ? lastComment[0].id + 1 : 1;
  const newComment = {
    content,
    feedbackId,
    userId,
    id,
  };

  await Comment.create({ ...newComment });
  const feedback = await Feedback.findOne({ id: feedbackId });
  await feedback.update({
    commentAmount: feedback.commentAmount + 1,
  });
  return res.status(201).json({ ...newComment });
};

export const addReplay = async (req, res) => {
  const { body } = req;

  const validator = await addReplaySchema(body);
  const { value: data, error } = validator.validate(body);
  if (error) {
    return res.status(401).json(error.details);
  }

  const { content, feedbackId, userId, commentId, replyingTo } = data;

  const lastReplay = await Replay.find().sort({ _id: -1 }).limit(1);
  const id = lastReplay.length > 0 ? lastReplay[0].id + 1 : 1;

  const newReplay = {
    content,
    replyingTo,
    feedbackId,
    commentId,
    userId,
    id,
  };

  await Replay.create({ ...newReplay });
  const feedback = await Feedback.findOne({ id: feedbackId });
  await feedback.update({
    commentAmount: feedback.commentAmount + 1,
  });
  return res.status(201).json({ ...newReplay });
};
