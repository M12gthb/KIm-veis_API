import { z } from "zod";
import { categorySchema } from "./categories.schema";

const addressSchema = z.object({
  id: z.number(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const addressSchemaCreate = addressSchema.omit({ id: true });

const realEstateSchema = z.object({
  id: z.number().positive(),
  value: z.number().or(z.string()).default(0),
  size: z.number().positive(),
  address: addressSchemaCreate,
  categoryId: z.number().positive(),
  sold: z.boolean().default(false),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

const createRealEstateSchema = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});

const returnRealEstateSchema = realEstateSchema
  .omit({ categoryId: true, address: true })
  .extend({ category: categorySchema, address: addressSchema });

export { realEstateSchema, createRealEstateSchema, returnRealEstateSchema };
