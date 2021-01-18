/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Channels from '../entities/channels';
import Speakers from '../entities/speakers';
import allErrors from '../utils/errors';
import { io } from '../server';

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

    if (!foundSpeaker) throw new Error(allErrors.userNotFound);

    const foundChannelToUpdateInfo = await channelsRepository.findOne(
      { where: { number: channelForShowingNumber } },
    );

    if (!foundChannelToUpdateInfo) throw new Error(allErrors.channelNotFound);

    foundChannelToUpdateInfo.activeSpeaker = foundSpeaker;
    foundChannelToUpdateInfo.activeSession = foundSpeaker.sessions;

    await channelsRepository.save(foundChannelToUpdateInfo);

    const data = { message: 'update speaker in channel', updatedSpeaker: foundSpeaker };

    io.to(String(foundChannelToUpdateInfo.number)).emit('connectToChannelRoom', data);

    res.status(200).send(foundSpeaker);
  } catch (error) {
    next(error);
  }
};

export const setBreakBetweenSessions = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const channelsRepository = await getRepository(Channels);

  try {
    const { channelForShowingNumber } = req.body;

    const foundChannelToUpdateInfo = await channelsRepository.findOne(
      { where: { number: channelForShowingNumber } },
    );

    if (!foundChannelToUpdateInfo) throw new Error(allErrors.channelNotFound);

    foundChannelToUpdateInfo.activeSession = null;
    foundChannelToUpdateInfo.activeSpeaker = null;
    foundChannelToUpdateInfo.break = true;
    await channelsRepository.save(foundChannelToUpdateInfo);

    res.status(200).send(foundChannelToUpdateInfo);
  } catch (error) {
    next(error);
  }
};
