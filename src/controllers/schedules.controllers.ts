import { Request, Response } from "express";
import {
  createSchedulesServices,
  readSchedulesServices,
} from "../services/schedules.services";

const createSchedules = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await createSchedulesServices(req.body, res.locals.decoded.sub);

  const response = { message: "Schedule created" };

  return res.status(201).json(response);
};

const readSchedules = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const schedule = await readSchedulesServices(Number(req.params.id));

  return res.status(200).json(schedule);
};

export { readSchedules, createSchedules };
