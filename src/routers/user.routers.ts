import { Router } from "express";
import {
  createUser,
  deleteUsers,
  getUsers,
  getUsersId,
  updateUsers,
} from "../controllers/users.controllers";

const router = Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.put("/users/:id", updateUsers);
router.delete("/users/:id", deleteUsers);
router.get("/users/:id", getUsersId);

export default router;
