import { Request, Response } from "express";
import { loginReturn } from "../interfaces/login.interfaces";
import { loginServices } from "../services/login.services";

const requestLogin = async (req: Request, res: Response): Promise<Response> => {
  const token: loginReturn = await loginServices(req.body);
  return res.status(200).json(token);
};

export { requestLogin };
