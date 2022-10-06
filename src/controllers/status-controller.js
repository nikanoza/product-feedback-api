import Status from "../models/Status.js";

export const getAllStatus = async (req, res) => {
  const data = await Status.find();
  const newData = data.map((status) => {
    return {
      id: status.id,
      name: status.name,
    };
  });
  return res.json(newData);
};
