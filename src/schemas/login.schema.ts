import { userSchema } from "./users.schema";

const loginSchema = userSchema.pick({ email: true, password: true });

export { loginSchema };
