import { NextFunction, Request, Response } from "express";
import { addressesRepository } from "../repositories";
import { AppError } from "../error/App.error";

export const verifyAdress = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const address = req.body.address;
  const number = address.number;

  if (number) {
    const find = await addressesRepository.findOne({
      where: {
        street: address.street,
        zipCode: address.zipCode,
        city: address.city,
        state: address.state,
        number: address.number,
      },
    });
    if (find) {
      throw new AppError("Address already exists", 409);
    }
    return next();
  } else {
    const find = await addressesRepository.findOne({
      where: {
        street: address.street,
        zipCode: address.zipCode,
        city: address.city,
        state: address.state,
      },
    });
    if (find) {
      throw new AppError("Address already exists", 409);
    }

    return next();
  }
};
