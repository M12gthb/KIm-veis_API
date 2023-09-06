import { Request, Response } from "express";
import {
  updateUserService,
  userCreateService,
  userDeleteService,
  userReadService,
} from "../services/users.services";
import { UserRead, UserReturn } from "../interfaces/users.interfaces";

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userCreateService(req.body);

  return res.status(201).json(user);
};

const readUser = async (req: Request, res: Response): Promise<Response> => {
  const admin: boolean = res.locals.decoded.admin;

  const users: UserRead = await userReadService(admin);

  return res.status(200).json(users);
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await updateUserService(
    res.locals.foundEntity,
    req.body
  );

  return res.status(200).json(user);
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  await userDeleteService(res.locals.foundEntity);

  return res.status(204).json();
};

export { createUser, readUser, deleteUser, updateUser };
