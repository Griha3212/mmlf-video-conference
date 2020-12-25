import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import allErrors from '../utils/errors';

/* eslint-disable import/prefer-default-export */
export const voteForSpeaker = async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = await getRepository(Users);
  const speakersRepository = await getRepository(Speakers);
  const votesRepository = await getRepository(Votes);

  try {
    const { userId, speakerId, rating } = req.body;

    if (!userId || !speakerId || !rating) throw new Error(allErrors.notEnoughInputData);
  } catch (error) {
    next(error);
  }
};
