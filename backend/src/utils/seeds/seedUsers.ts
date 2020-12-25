import { getRepository } from 'typeorm';
import Users from '../../entities/users';

export const seedMockedUsers = async () => {
  const usersRepository = await getRepository(Users);
};
