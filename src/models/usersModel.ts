import { connection } from "../sql";

export const getAllUsers = async () => {
  const users = await connection.execute("SELECT * FROM users");
  return users;
};

export const addUser = async () => {};
