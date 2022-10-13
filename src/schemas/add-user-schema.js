import Joi from "joi";
import User from "../models/User.js";

const determineIfUserExists = (user) => (value, helpers) => {
  if (user) {
    return helpers.messages("user with this username already exists");
  }
  return value;
};

const addUserSchema = async (data) => {
  const user = await User.findOne({ username: data.username });
  return Joi.object({
    name: Joi.string()
      .pattern(/^[a-zA-z]*\s[a-zA-z]*$/)
      .required()
      .messages({
        "string.base": "name should be a string",
        "string.pattern": "name should include english letters and space only",
        "any.required": "name is required",
      }),
    username: Joi.string()
      .custom(determineIfUserExists(user))
      .required()
      .messages({
        "string.base": "username should be a string",
        "any.required": "username is required",
      }),
    avatar: Joi.string().required().messages({
      "string.base": "avatar should be a string",
      "any.required": "avatar is required",
    }),
  });
};

export default addUserSchema;
