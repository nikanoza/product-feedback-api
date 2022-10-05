import Category from "../models/Category.js";

export const getAllCategories = async (req, res) => {
  const data = await Category.find();
  return res.json(data);
};
