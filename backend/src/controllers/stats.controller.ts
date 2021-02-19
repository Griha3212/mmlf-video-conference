/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
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
      {
        relations: ['usersWhoWatchedSpeaker', 'votes',
          'votes.user', 'usersWhoSendContacts', 'usersWhoSendContacts.user'],
      },
    );

    const foundAllUsers = await usersRepository.find();

    res.status(200).send({ foundSpeakers, foundAllUsers });
  } catch (error) {
    next(error);
  }
};

export const updateStats = async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = await getRepository(Users);
  const speakersRepository = await getRepository(Speakers);

  try {
    const { userId } = req.params;

    // found JOS
    const foundSpeaker = await speakersRepository.findOne(
      {
        where: { id: 28 },
        relations: ['usersWhoWatchedSpeaker', 'votes',
          'votes.user', 'usersWhoSendContacts', 'usersWhoSendContacts.user'],
      },
    );

    if (!foundSpeaker) throw new Error(allErrors.speakerNotFound);

    // const foundSpeakers = await speakersRepository.find(
    //   {
    //     relations: ['usersWhoWatchedSpeaker', 'votes',
    //       'votes.user', 'usersWhoSendContacts', 'usersWhoSendContacts.user'],
    //   },
    // );

    const foundAllUsers = await usersRepository.find({ relations: ['watchedSpeakers'] });

    const foundWatchedUsers = foundSpeaker.usersWhoWatchedSpeaker;

    const needAmountOfAddedUsers = Math.floor(
      (foundWatchedUsers.length * 2.5 - foundWatchedUsers.length),
    );

    console.log('foundAllUsers[0] :>> ', foundAllUsers[0]);

    console.log('foundAllUsers :>> ', foundAllUsers.length);

    console.log('foundWatchedUsers[0] :>> ', foundWatchedUsers[0]);

    console.log('foundWatchedUsers :>> ', foundWatchedUsers.length);

    console.log('needAmountOfAddedUsers :>> ', needAmountOfAddedUsers);

    const arrayOfUnicNewUsers = foundAllUsers.filter(
      (objFromA) => !foundWatchedUsers.find((objFromB) => objFromA.id === objFromB.id),
    );

    console.log('arrayOfUnicNewUsers :>> ', arrayOfUnicNewUsers.length);
    // shuffle an array of arrayOfUnicNewUsers
    arrayOfUnicNewUsers.sort(() => Math.random() - 0.5);
    console.log('arrayOfUnicNewUsers :>> ', arrayOfUnicNewUsers.length);

    const result = [];

    for (let index = 0; index < needAmountOfAddedUsers; index++) {
      const userToUpdate = arrayOfUnicNewUsers[index];
      // console.log('userToUpdate :>> ', userToUpdate);
      userToUpdate.watchedSpeakers.push(foundSpeaker);
      result.push(userToUpdate);
    }

    await usersRepository.save(result);

    res.status(200).send('success');
  } catch (error) {
    next(error);
  }
};
