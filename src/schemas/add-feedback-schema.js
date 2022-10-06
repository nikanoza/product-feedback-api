import Joi from "joi";
import Category from "../models/Category.js";

const checkCategory = (document) => (value, helpers) => {
  if (!document) {
    return helpers.messages("there is no category with this id");
  }

  return value;
};

const addFeedbackSchema = async (data) => {
  const category = await Category.findOne({ id: data.category_id });
  return Joi.object({
    title: Joi.string().min(3).required().messages({
      "string.base": "title should be a string",
      "string.min": "title should include 3 characters or more",
      "any.required": "title is required",
    }),
    description: Joi.string().min(3).required().messages({
      "string.base": "description should be a string",
      "string.min": "description should include 3 characters or more",
      "any.required": "description is required",
    }),
    category_id: Joi.number().custom(checkCategory(category)).required().messages({
      "number.base": "category id should be a number",
      "any.required": "category id is required",
    }),
  });
};

export default addFeedbackSchema;
