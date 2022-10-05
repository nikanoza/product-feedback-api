import Feedback from "../models/Feedback.js";

export const getAllFeedbacks = async (req, res) => {
    const data = await Feedback.find();
    return res.json(data)
};
