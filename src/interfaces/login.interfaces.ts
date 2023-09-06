import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";

type loginCreate = z.infer<typeof loginSchema>;
type loginReturn = { token: string };

export { loginReturn, loginCreate };
