import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoriesRepository } from "../repositories";
import { AppError } from "../error/App.error";

export const verifyName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const name: string = req.body.name;
  if (!name) return next();

  const foundEntity: Category | null = await categoriesRepository.findOneBy({
    name,
  });
  if (foundEntity) throw new AppError("Category already exists", 409);

  return next();
};
