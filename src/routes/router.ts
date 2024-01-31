import express from "express";
import {
  deleteUser,
  getAll,
  registerNewUser,
  transfer,
  updateUser,
} from "../controllers/usersController";
import {
  validateUsers,
  validateUpdateUser,
  valiateBalance,
} from "../middlewares/usersMiddleware";

export const router = express.Router();

//GET
router.get("/users", getAll);

//POST
router.post("/users", validateUsers, registerNewUser);

//DELETE
router.delete("/users/:id", deleteUser);

//PUT
router.put("/users/:id", validateUpdateUser, updateUser);
router.put("/users/:senderId/transfer/:receiverId", valiateBalance, transfer);
