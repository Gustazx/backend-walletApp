import express from "express";
import {
  deleteUser,
  getAll,
  registerNewUser,
  updateUser,
} from "./users/usersController";
import {
  validateUsers,
  validateUpdateUser,
} from "./middlewares/usersMiddleware";

export const router = express.Router();

router.get("/users", getAll);
router.post("/users", validateUsers, registerNewUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", validateUpdateUser, updateUser);
