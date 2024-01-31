import { connection } from "../config/sql";
import { UserSchema } from "../schemas/userSchema";

export const getAllUsers = async () => {
  const [users] = await connection.execute("SELECT * FROM users");

  return users;
};

export const registerUser = async (user: UserSchema) => {
  const { name, email, password } = user;

  const query = "INSERT INTO users(name, email, password) VALUES (?, ?, ?)";

  const [newUser] = await connection.execute(query, [name, email, password]);

  return newUser;
};

export const deleteUserById = async (id: any) => {
  const query = "DELETE FROM users WHERE id = ?";

  const [deletedUser] = await connection.execute(query, [id]);

  return deletedUser;
};

export const updateUserById = async (id: any, user: UserSchema) => {
  const { name, email } = user;

  const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";

  const [updatedUser] = await connection.execute(query, [name, email, id]);

  return updatedUser;
};

export const transferBalance = async (
  user: UserSchema,
  sender: any,
  receiver: any
) => {
  const { balance } = user;

  const query =
    "UPDATE users SET balance = balance - ? WHERE id = ?; UPDATE users SET balance = balance + ? WHERE id = ? ";

  const [test] = await connection.query(query, [
    balance,
    sender,
    balance,
    receiver,
  ]);
  console.log(test);
};
