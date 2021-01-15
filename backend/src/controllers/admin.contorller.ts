/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Channels from '../entities/channels';
import Speakers from '../entities/speakers';
import allErrors from '../utils/errors';

export const changeActiveSpeakerInChannel = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const speakersRepository = await getRepository(Speakers);
  const channelsRepository = await getRepository(Channels);

  try {
    const { channelForShowingNumber, speakerIdToActivate } = req.body;

    const foundSpeaker = await speakersRepository.findOne(
      { where: { id: speakerIdToActivate }, relations: ['sessions'] },
    );

    console.log('foundSpeaker :>> ', foundSpeaker);

    if (!foundSpeaker) throw new Error(allErrors.userNotFound);

    const foundChannelToUpdateInfo = await channelsRepository.findOne(
      { where: { number: channelForShowingNumber } },
    );

    if (!foundChannelToUpdateInfo) throw new Error(allErrors.channelNotFound);

    foundChannelToUpdateInfo.activeSpeaker = foundSpeaker;
    foundChannelToUpdateInfo.activeSession = foundSpeaker.sessions;

    await channelsRepository.save(foundChannelToUpdateInfo);

    res.status(200).send(foundSpeaker);
  } catch (error) {
    next(error);
  }
};
