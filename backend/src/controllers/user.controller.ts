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

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = await getRepository(Users);
  const sessionsRepository = await getRepository(Sessions);
  const channelsRepository = await getRepository(Channels);

  try {
    const { userId } = req.params;

    const foundUser = await usersRepository.findOne(
      {
        where: { id: userId },
        relations: ['votes', 'votes.speaker', 'watchedSpeakers'],
      },
    );

    if (!foundUser) throw new Error(allErrors.userNotFound);

    if (foundUser.isAdmin) {
      const sessionAdminInfo = await sessionsRepository.findOne({
        where: { name: foundUser.adminOfTheSessionName },
        relations: ['speakers', 'channelForShowing', 'channelForShowing.activeSpeaker'],
      });

      res.status(200).send(sessionAdminInfo);
    } else {
      const channelUserInfo = await channelsRepository.findOne(
        {
          where: { number: foundUser.activeChannel },
          relations: ['activeSession', 'activeSession.speakers', 'activeSpeaker'],
        },
      );

      const finalInfoForUser = { foundUser, channelUserInfo };

      res.status(200).send(finalInfoForUser);
    }
  } catch (error) {
    next(error);
  }
};

export const voteForSpeaker = async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = await getRepository(Users);
  const speakersRepository = await getRepository(Speakers);
  const votesRepository = await getRepository(Votes);

  try {
    const { userId, speakerId, rate } = req.body;

    const foundUser = await usersRepository.findOne(
      { where: { id: userId } },
    );

    if (!foundUser) throw new Error(allErrors.userNotFound);

    const foundSpeaker = await speakersRepository.findOne({ where: { id: speakerId } });

    if (!foundSpeaker) throw new Error(allErrors.speakerNotFound);

    // found existed vote with user/speaker combo
    const foundExistedVoteToUpdate = await votesRepository.findOne(
      { where: { user: foundUser, speaker: foundSpeaker } },
    );

    // update if existed, create if new
    if (foundExistedVoteToUpdate) {
      foundExistedVoteToUpdate.createdAt = new Date();
      foundExistedVoteToUpdate.user = foundUser;
      foundExistedVoteToUpdate.speaker = foundSpeaker;
      foundExistedVoteToUpdate.rate = rate;

      await votesRepository.save(foundExistedVoteToUpdate);
    } else {
      const newVote = new Votes();

      newVote.createdAt = new Date();
      newVote.user = foundUser;
      newVote.speaker = foundSpeaker;
      newVote.rate = rate;

      await votesRepository.save(newVote);
    }

    const foundUserAfterVotesUpdate = await usersRepository.findOne(
      { where: { id: userId }, relations: ['votes', 'votes.speaker'] },
    );

    const room = foundUser.id;
    const data = { message: 'update current speakers votes', votes: foundUserAfterVotesUpdate && foundUserAfterVotesUpdate.votes };

    await io.to(String(room)).emit('connectToPersonalRoom', data);
    res.status(200).send(foundUserAfterVotesUpdate && foundUserAfterVotesUpdate.votes);
  } catch (error) {
    next(error);
  }
};

export const updateWatchedSpeakers = async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = await getRepository(Users);
  const speakersRepository = await getRepository(Speakers);

  try {
    const { userId, speakerId } = req.body;

    const foundUser = await usersRepository.findOne(
      { where: { id: userId }, relations: ['watchedSpeakers'] },
    );

    if (!foundUser) throw new Error(allErrors.userNotFound);

    const foundSpeaker = await speakersRepository.findOne({ where: { id: speakerId } });

    if (!foundSpeaker) throw new Error(allErrors.speakerNotFound);

    foundUser.watchedSpeakers.push(foundSpeaker);

    await usersRepository.save(foundUser);

    res.status(200).send(foundUser);
  } catch (error) {
    next(error);
  }
};

export const getAllChannels = async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = await getRepository(Users);
  const channelsRepository = await getRepository(Channels);

  try {
    const { userId } = req.params;

    const foundUser = await usersRepository.findOne(
      { where: { id: userId } },
    );

    if (!foundUser) throw new Error(allErrors.userNotFound);

    const foundAllChannels = await channelsRepository.find({ relations: ['activeSession'] });

    res.status(200).send(foundAllChannels);
  } catch (error) {
    next(error);
  }
};

export const changeActiveChannel = async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = await getRepository(Users);
  const channelsRepository = await getRepository(Channels);

  try {
    const { userId, channelNumber } = req.body;

    const foundUser = await usersRepository.findOne(
      { where: { id: userId } },
    );

    if (!foundUser) throw new Error(allErrors.userNotFound);

    const foundChannel = await channelsRepository.findOne(
      { where: { number: channelNumber } },
    );

    if (!foundChannel) throw new Error(allErrors.channelNotFound);

    foundUser.activeChannel = foundChannel.number;

    await usersRepository.save(foundUser);

    res.status(200).send(foundUser);
  } catch (error) {
    next(error);
  }
};
