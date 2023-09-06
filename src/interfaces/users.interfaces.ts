import { z } from "zod";
import {
  createUserSchema,
  userReturnSchema,
  userReadSchema,
} from "../schemas/users.schema";
import { DeepPartial } from "typeorm";

type UserCreate = z.infer<typeof createUserSchema>;

type UserReturn = z.infer<typeof userReturnSchema>;

type UserUpdate = DeepPartial<UserCreate>;

type UserRead = z.infer<typeof userReadSchema>;

export { UserCreate, UserReturn, UserUpdate, UserRead };
