import Feedback from "../models/Feedback.js";
import addFeedbackSchema from "../schemas/add-feedback-schema.js";

export const getAllFeedbacks = async (req, res) => {
  const data = await Feedback.find();
  return res.json(data);
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

  await Feedback.create({
    title,
    description,
    category_id,
    upvotes: 0,
    status_id: 1,
    id,
  });

  return res.status(201).json({ message: "feedback create successfully" });
};
