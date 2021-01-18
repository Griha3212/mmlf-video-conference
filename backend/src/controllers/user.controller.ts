/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Channels from '../entities/channels';
import Sessions from '../entities/sessions';
import Speakers from '../entities/speakers';
import Users from '../entities/users';
import Votes from '../entities/votes';
import allErrors from '../utils/errors';

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = await getRepository(Users);
  const sessionsRepository = await getRepository(Sessions);
  const channelsRepository = await getRepository(Channels);

  try {
    const { userId } = req.params;

    const foundUser = await usersRepository.findOne({ where: { id: userId } });

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

      // const sessionUserInfo = await sessionsRepository.findOne({
      //   where: { name: foundUser.adminOfTheSessionName },
      //   relations: ['speakers', 'channelForShowing'],
      // });

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

    console.log('here :>> ');

    const foundUser = await usersRepository.findOne({ where: { id: userId } });

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

    res.status(200).send('success');
  } catch (error) {
    next(error);
  }
};
