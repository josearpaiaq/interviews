import express from "express";
import {
  deleteTaskHandler,
  getTaskHandler,
  getTasksHandler,
  patchTaskHandler,
  postTaskHandler,
  processAllTasksHandler,
  processTaskHandler,
} from "@/src/tasks/handlers.ts";

export const tasksRoutes = express.Router();

tasksRoutes.get("/", getTasksHandler);
tasksRoutes.post("/", postTaskHandler);
tasksRoutes.get("/:id", getTaskHandler);
tasksRoutes.patch("/:id", patchTaskHandler);
tasksRoutes.delete("/:id", deleteTaskHandler);
tasksRoutes.post("/:id/process", processTaskHandler);
tasksRoutes.get("/process/all", processAllTasksHandler);
