import Status from "../models/Status.js";

export const getAllStatus = async (req, res) => {
  const data = await Status.find();
  const newData = data.map((status) => {
    return {
      id: status.id,
      name: status.name,
      color: status.color,
    };
  });
  return res.json(newData);
};
