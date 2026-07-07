import { AppError } from "@/src/errors/AppError.ts";
import type { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  if (statusCode === 500) console.error(err);
  res
    .status(statusCode)
    .json({ error: { message: err.message, status: statusCode } });
};