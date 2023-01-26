import { Router } from "express";
import {
  createTask,
  deleteTaskById,
  renderIndex,
  renderTask,
  updateDoneProp,
  updateTask,
} from "../controllers/task.controller";
import Task from "../models/Task";
const router = Router();

//** Inital Route */
router.get("/", renderIndex);

//** Create a new Task route */
router.post("/tasks/add", createTask);

//** Edit a task by id */
router.post("/tasks/:id/edit", updateTask);

//** Get and render a task by id */
router.get("/tasks/:id/edit", renderTask);

//** Delete task by id */
router.get("/tasks/:id/delete", deleteTaskById);

//** Update 'done' property's task by id */
router.get("/tasks/:id/toggleDone", updateDoneProp);

export default router;
