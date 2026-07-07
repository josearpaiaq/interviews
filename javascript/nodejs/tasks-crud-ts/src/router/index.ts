import express from "express";
import { tasksRoutes } from "@/src/tasks/routes.ts";

export const router = express.Router();

router.use("/tasks", tasksRoutes);
