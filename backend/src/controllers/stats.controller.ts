/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Channels from '../entities/channels';
import Sessions from '../entities/sessions';
import Speakers from '../entities/speakers';
import Users from '../entities/users';
import Votes from '../entities/votes';
import allErrors from '../utils/errors';
import { io } from '../server';

// TO DO
export const getStats = async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = await getRepository(Users);
  const sessionsRepository = await getRepository(Sessions);
  const channelsRepository = await getRepository(Channels);

  try {
    const { userId } = req.params;

    const foundUser = await usersRepository.findOne(
      {
        where: { id: userId },

      },
    );

    if (!foundUser) throw new Error(allErrors.userNotFound);

    if (!foundUser.hasAccessToStatisticPage) throw new Error(allErrors.notStatsAccount);

    res.status(200).send(foundUser);
  } catch (error) {
    next(error);
  }
};
