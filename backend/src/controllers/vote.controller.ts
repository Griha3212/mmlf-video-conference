import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import allErrors from '../utils/errors';

/* eslint-disable import/prefer-default-export */
export const voteForSpeaker = async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = await getRepository(User);
  const speakerRepository = await getRepository(Speaker);
  const votesRepository = await getRepository(Votes);

  try {
    const { userId, speakerId, rating } = req.body;

    if (!userId || !speakerId || !rating) throw new Error(allErrors.notEnoughInputData);
  } catch (error) {
    next(error);
  }
};
