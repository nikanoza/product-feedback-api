import User from "../models/User.js";
import addUserSchema from "../schemas/add-user-schema.js";

export const getUsers = async (_, res) => {
  const data = await User.find();
  const reformData = data.map((user) => {
    return {
      name: user.name,
      username: user.username,
      avatar: user.avatar,
    };
  });

  return res.status(200).json(reformData);
};

export const addUser = async (req, res) => {
  const { file, body } = req;

  const validator = await addUserSchema({ ...body, avatar: 'images/' + file.originalname });

  const { value, error } = validator.validate({
    ...body,
    avatar: "images/" + file.originalname,
  });

  if (error) {
    return res.status(401).json(error.details);
  }

  const { name, username, avatar } = value;

  await User.create({
    name,
    username,
    avatar,
  });

  return res.status(201).json({ message: "new user created" });
};
