import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { loginSchema } from "../schemas/login.schema";
import { requestLogin } from "../controllers/login.controllers";

const loginRouters: Router = Router();

loginRouters.post("", validateBody(loginSchema), requestLogin);

export { loginRouters };
