import { Request, Response } from "express";
import { RealEstate } from "../entities";
import {
  createRealEstateService,
  readRealEstateService,
} from "../services/realEstate.services";

const createRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: RealEstate = await createRealEstateService(req.body);

  return res.status(201).json(realEstate);
};

const readRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate = await readRealEstateService();

  return res.status(200).json(realEstate);
};

export { readRealEstate, createRealEstate };
