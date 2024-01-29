import {
  deleteUserById,
  getAllUsers,
  registerUser,
  updateUserById,
} from "./usersModel";

export const getAll = async (req: any, res: any) => {
  const users = await getAllUsers();

  return res.status(200).json(users);
};

export const registerNewUser = async (req: any, res: any) => {
  const newUser = await registerUser(req.body);

  return res.status(201).json(newUser);
};

export const deleteUser = async (req: any, res: any) => {
  const { id } = req.params;

  await deleteUserById(id);

  return res.status(204).json();
};

export const updateUser = async (req: any, res: any) => {
  const { id } = req.params;
  await updateUserById(id, req.body);
  return res.status(204).json();
};
