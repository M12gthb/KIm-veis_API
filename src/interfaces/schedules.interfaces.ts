import { z } from "zod";
import {
  schedulesSchema,
  createSchedulesSchema,
} from "../schemas/schedules.schema";

type createSchedule = z.infer<typeof createSchedulesSchema>;

type schedule = z.infer<typeof schedulesSchema>;

type categorySchedule = Array<schedule>;

export { createSchedule, schedule, categorySchedule };
