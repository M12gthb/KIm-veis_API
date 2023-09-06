import { Router } from "express";
import { verifyUserId } from "../middlewares/verifyUserId.middleware";
import { validateAdmin } from "../middlewares/validateAdmin.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { createUserSchema, patchUserSchema } from "../schemas/users.schema";
import { verifyEmail } from "../middlewares/verifyEmailexist.middleware";
import {
  createUser,
  deleteUser,
  readUser,
  updateUser,
} from "../controllers/users.controllers";
import { validatePermission } from "../middlewares/validadePremission.middleware";

const usersRouters: Router = Router();

usersRouters.post("", validateBody(createUserSchema), verifyEmail, createUser);

usersRouters.get("", verifyToken, validateAdmin, readUser);

usersRouters.patch(
  "/:id",
  verifyToken,
  verifyUserId,
  validatePermission,
  validateBody(patchUserSchema),
  verifyEmail,
  updateUser
);

usersRouters.delete(
  "/:id",
  verifyToken,
  verifyUserId,
  validateAdmin,
  deleteUser
);

export { usersRouters };
