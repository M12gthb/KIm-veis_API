import {
  UserCreate,
  UserRead,
  UserReturn,
  UserUpdate,
} from "../interfaces/users.interfaces";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas/users.schema";

const userCreateService = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);

  return userReturnSchema.parse(user);
};

const userReadService = async (admin: boolean): Promise<UserRead> => {
  if (admin) {
    const users: Array<User> = await userRepository.find({ withDeleted: true });
    return userReadSchema.parse(users);
  }
  return userReadSchema.parse(await userRepository.find());
};

const updateUserService = async (
  user: User,
  data: UserUpdate
): Promise<UserReturn> => {
  const userUpdate = await userRepository.save({ ...user, ...data });

  return userReturnSchema.parse(userUpdate);
};

const userDeleteService = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export {
  userCreateService,
  userReadService,
  userDeleteService,
  updateUserService,
};
