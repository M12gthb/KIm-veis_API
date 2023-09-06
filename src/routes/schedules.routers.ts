import { Router } from "express";
import { verifyRealEstateId } from "../middlewares/verifyRealEstateId.middleware";
import { validateAdmin } from "../middlewares/validateAdmin.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { createSchedulesSchema } from "../schemas/schedules.schema";
import {
  createSchedules,
  readSchedules,
} from "../controllers/schedules.controllers";

const schedulesRouters: Router = Router();

schedulesRouters.post(
  "",
  verifyToken,
  validateBody(createSchedulesSchema),
  createSchedules
);

schedulesRouters.get(
  "/realEstate/:id",
  verifyToken,
  validateAdmin,
  verifyRealEstateId,
  readSchedules
);

export { schedulesRouters };
