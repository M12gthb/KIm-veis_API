import { Router } from "express";
import { verifyCategoryId } from "../middlewares/verifyCategoryId.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateAdmin } from "../middlewares/validateAdmin.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas/categories.schema";
import { verifyName } from "../middlewares/verifyCategoryName.middleware";
import {
  createCategory,
  readCategory,
  readCategoryRealEstate,
} from "../controllers/categories.controllers";

const categoriesRouters: Router = Router();

categoriesRouters.post(
  "",
  validateBody(categoryCreateSchema),
  verifyToken,
  validateAdmin,
  verifyName,
  createCategory
);

categoriesRouters.get("", readCategory);

categoriesRouters.get(
  "/:id/realEstate",
  verifyCategoryId,
  readCategoryRealEstate
);

export { categoriesRouters };
