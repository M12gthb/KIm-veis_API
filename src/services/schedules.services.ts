import { RealEstate, Schedule } from "../entities";
import { AppError } from "../error/App.error";
import { createSchedule } from "../interfaces/schedules.interfaces";
import {
  real_estateRepository,
  schedulesRepository,
  userRepository,
} from "../repositories";

const createSchedulesServices = async (
  data: createSchedule,
  id: string
): Promise<Schedule> => {
  const date = data.date;
  const day: number = new Date(date).getDay();
  const hour: number = Number(data.hour.substring(0, 2));
  const realEstateId = data.realEstateId;
  const userId = await userRepository.findOneBy({ id: Number(id) });
  const rId = await real_estateRepository.findOneBy({
    id: Number(realEstateId),
  });

  const validateSchedule = await schedulesRepository
    .createQueryBuilder("schedule")
    .where("schedule.userId = :userId", { userId: userId?.id })
    .andWhere("schedule.date = :date", { date: data.date })
    .andWhere("schedule.hour = :hour", { hour: data.hour })
    .getOne();

  const validateRealEstate = await schedulesRepository
    .createQueryBuilder("schedule")
    .where("schedule.realEstateId = :realEstateId", {
      realEstateId: data.realEstateId,
    })
    .andWhere("schedule.date = :date", { date: data.date })
    .andWhere("schedule.hour = :hour", { hour: data.hour })
    .getOne();

  if (!rId) {
    throw new AppError("RealEstate not found", 404);
  }

  if (day == 0 || day == 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  if (hour < 8 || hour > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  if (validateRealEstate) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  if (validateSchedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const scheduleData = {
    ...data,
    userId: userId,
    realEstateId: rId.id,
  };

  const schedule: Schedule = schedulesRepository.create(scheduleData);

  await schedulesRepository.save(schedule);

  return schedule;
};

const readSchedulesServices = async (id: number): Promise<RealEstate> => {
  const schedules: RealEstate | null = await real_estateRepository.findOne({
    where: { id: id },
    relations: { schedules: { user: true }, address: true, category: true },
  });

  return schedules!;
};

export { readSchedulesServices, createSchedulesServices };
