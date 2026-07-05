import express from "express";
import { tasksRoutes } from "../tasks/routes.js";

export const router = express.Router();

router.use("/tasks", tasksRoutes);
