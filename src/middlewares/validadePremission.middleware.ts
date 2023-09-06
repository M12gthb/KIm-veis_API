import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/App.error";

export const validatePermission = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const admin: boolean = res.locals.decoded.admin;
  if (admin) {
    return next();
  }
  const user: string = res.locals.decoded.sub;

  if (req.params.id == user) {
    return next();
  }
  throw new AppError("Insufficient permission", 403);
};
