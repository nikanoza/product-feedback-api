import Category from "../models/Category.js";

export const getAllCategories = async (req, res) => {
  const data = await Category.find();
  const newData = data.map(category => {
    return {
      id: category.id,
      name: category.name,
    }
  })
  return res.json(newData);
};
