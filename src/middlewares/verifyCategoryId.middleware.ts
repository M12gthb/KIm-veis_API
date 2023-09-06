import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoriesRepository } from "../repositories";
import { AppError } from "../error/App.error";

export const verifyCategoryId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundEntity: Category | null = await categoriesRepository.findOneBy({
    id,
  });
  if (!foundEntity) throw new AppError("Category not found", 404);

  res.locals = { ...res.locals, foundEntity };

  return next();
};
