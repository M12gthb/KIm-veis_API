import { z } from "zod";
import {
  categoryCreateSchema,
  categorySchema,
} from "../schemas/categories.schema";

type categoryCreate = z.infer<typeof categoryCreateSchema>;

type category = z.infer<typeof categorySchema>;

type categoryRead = Array<category>;

export { categoryCreate, category, categoryRead };
