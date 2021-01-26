/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Speakers from '../entities/speakers';
import Users from '../entities/users';
import allErrors from '../utils/errors';

// TO DO
export const getStats = async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = await getRepository(Users);
  const speakersRepository = await getRepository(Speakers);

  try {
    const { userId } = req.params;

    const foundUser = await usersRepository.findOne(
      {
        where: { id: userId },

      },
    );

    if (!foundUser) throw new Error(allErrors.userNotFound);

    if (!foundUser.hasAccessToStatisticPage) throw new Error(allErrors.notStatsAccount);

    const foundSpeakers = await speakersRepository.find(
      { relations: ['usersWhoWatchedSpeaker', 'votes', 'votes.user', 'usersWhoSendContacts'] },
    );

    res.status(200).send(foundSpeakers);
  } catch (error) {
    next(error);
  }
};
