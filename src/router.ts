import express from "express";
import { getAll } from "./controllers/usersController";

export const router = express.Router();

router.get("/users", getAll);
