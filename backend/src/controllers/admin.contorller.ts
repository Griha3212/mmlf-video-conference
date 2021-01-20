/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Channels from '../entities/channels';
import Speakers from '../entities/speakers';
import allErrors from '../utils/errors';
import { io } from '../server';
import Users from '../entities/users';

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
    foundChannelToUpdateInfo.break = false;

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
  const usersRepository = await getRepository(Users);

  try {
    const { channelForShowingNumber } = req.body;

    const foundChannelToUpdateInfo = await channelsRepository.findOne(
      { where: { number: channelForShowingNumber }, relations: ['activeSession'] },
    );

    if (!foundChannelToUpdateInfo) throw new Error(allErrors.channelNotFound);

    // foundChannelToUpdateInfo.activeSession = null;
    // foundChannelToUpdateInfo.activeSpeaker = null;
    foundChannelToUpdateInfo.break = true;
    await channelsRepository.save(foundChannelToUpdateInfo);

    // if plenar session, activate OtherChannelsBlock in UI
    if (foundChannelToUpdateInfo.activeSession?.name === 'Plenar') {
      const foundNotFreeAccessUsers = await usersRepository.find(
        { where: { isFreeSessionAccessOnly: false } },
      );

      const results = [];

      for (const user of foundNotFreeAccessUsers) {
        user.showOtherChannelsBlock = true;
        results.push(user);
      }
      await usersRepository.save(results);

      // socket update
      const data = { message: 'update' };

      io.to(String(foundChannelToUpdateInfo.number)).emit('connectToChannelRoom', data);
    }

    res.status(200).send(foundChannelToUpdateInfo);
  } catch (error) {
    next(error);
  }
};
