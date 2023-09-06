import { z } from "zod";

const schedulesSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().positive(),
  userId: z.number().positive(),
});

const createSchedulesSchema = schedulesSchema.omit({ id: true, userId: true });

export { schedulesSchema, createSchedulesSchema };
