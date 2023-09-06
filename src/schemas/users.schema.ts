import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
});

const createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userReturnSchema = userSchema.omit({ password: true });

const userReadSchema = userReturnSchema.array();

const patchUserSchema = userSchema
  .partial({ name: true, email: true, password: true })
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    admin: true,
  });

export {
  userSchema,
  userReturnSchema,
  patchUserSchema,
  createUserSchema,
  userReadSchema,
};
