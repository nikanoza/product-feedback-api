import Feedback from "../models/Feedback.js";
import addFeedbackSchema from "../schemas/add-feedback-schema.js";

export const getAllFeedbacks = async ( _, res) => {
  const data = await Feedback.find();
  const newData = data.map((feedback) => {
    return {
      id: feedback.id,
      category_id: feedback.category_id,
      status_id: feedback.status_id,
      description: feedback.description,
      upvotes: feedback.upvotes,
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
    status_id: 1,
    id,
  };

  await Feedback.create({ ...newFeedback });

  return res.status(201).json({ ...newFeedback });
};
