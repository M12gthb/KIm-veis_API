import { Router } from "express";
import { validateAdmin } from "../middlewares/validateAdmin.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { createRealEstateSchema } from "../schemas/realEstate.schema";
import { verifyAdress } from "../middlewares/verifyAddress.midleware";
import {
  createRealEstate,
  readRealEstate,
} from "../controllers/realEstate.controllers";

const realEstateRouters: Router = Router();

realEstateRouters.post(
  "",
  verifyToken,
  validateAdmin,
  validateBody(createRealEstateSchema),
  verifyAdress,
  createRealEstate
);

realEstateRouters.get("", readRealEstate);

export { realEstateRouters };
