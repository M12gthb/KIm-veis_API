import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/App.error";

export const validateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const admin: boolean = res.locals.decoded.admin;
  if (!admin) throw new AppError("Insufficient permission", 403);

  return next();
};
