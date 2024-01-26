import { getAllUsers } from "../models/usersModel";

export const getAll = async (req: any, res: any) => {
  const users = await getAllUsers();

  return res.status(200).json(users);
};
