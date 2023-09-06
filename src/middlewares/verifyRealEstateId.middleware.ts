import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../entities";
import { real_estateRepository } from "../repositories";
import { AppError } from "../error/App.error";

export const verifyRealEstateId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundEntity: RealEstate | null = await real_estateRepository.findOneBy({
    id,
  });
  if (!foundEntity) throw new AppError("RealEstate not found", 404);

  res.locals = { ...res.locals, foundEntity };

  return next();
};
