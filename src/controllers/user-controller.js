import User from "../models/User.js";

export const getAllUsers = async (_, res) => {
  const users = await User.find();
  const newData = users.map((user) => {
    return {
      username: user.username,
      name: user.name,
      avatar: user.avatar,
      id: user.id,
    };
  });

  return res.json(newData);
};
