import { compare } from "bcryptjs";
import { User } from "../entities";
import { AppError } from "../error/App.error";
import { userRepository } from "../repositories";
import { sign } from "jsonwebtoken";
import { loginCreate, loginReturn } from "../interfaces/login.interfaces";

const loginServices = async ({
  email,
  password,
}: loginCreate): Promise<loginReturn> => {
  const foundUser: User | null = await userRepository.findOneBy({ email });

  if (!foundUser) {
    throw new AppError("Invalid credentials", 401);
  }

  const samePwd: boolean = await compare(password, foundUser.password);

  if (!samePwd) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { admin: foundUser.admin },
    process.env.SECRET_KEY!,
    { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};

export { loginServices };
