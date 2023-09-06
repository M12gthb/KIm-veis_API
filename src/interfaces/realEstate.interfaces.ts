import { z } from "zod";
import {
  realEstateSchema,
  createRealEstateSchema,
  returnRealEstateSchema,
} from "../schemas/realEstate.schema";

type createRealEstate = z.infer<typeof createRealEstateSchema>;

type realEstate = z.infer<typeof realEstateSchema>;

type returnRealEstate = z.infer<typeof returnRealEstateSchema>;

export { createRealEstate, realEstate, returnRealEstate };
