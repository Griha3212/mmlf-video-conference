/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import Users from '../../entities/users';

export const seedMockedUsers = async () => {
  const usersRepository = await getRepository(Users);

  const usersToSeed = [{

    firstName: 'test1',
    lastName: 'testovich1',
    company: 'companyTest1',
    loginCode: 'aaa',

  },

  {

    firstName: 'test2',
    lastName: 'testovich2',
    company: 'companyTest2',
    loginCode: 'bbb',

  },
  {

    firstName: 'admin',
    lastName: 'Plenaer',
    company: 'CCL',
    loginCode: 'adminPlenar',
    adminOfTheSessionName: 'Plenar',
    isAdmin: true,

  },

  {

    firstName: 'admin',
    lastName: 'A',
    company: 'CCL',
    loginCode: 'adminA',
    adminOfTheSessionName: 'SessA',
    isAdmin: true,

  },

  {

    firstName: 'admin',
    lastName: 'B',
    company: 'CCL',
    loginCode: 'adminB',
    adminOfTheSessionName: 'SessB',
    isAdmin: true,

  },

  {

    firstName: 'admin',
    lastName: 'C',
    company: 'CCL',
    loginCode: 'adminC',
    adminOfTheSessionName: 'SessC',
    isAdmin: true,

  },

  {

    firstName: 'admin',
    lastName: 'WMS1',
    company: 'CCL',
    loginCode: 'adminWMS1',
    adminOfTheSessionName: 'WMS1',
    isAdmin: true,

  },

  {

    firstName: 'test4',
    lastName: 'testovich4',
    company: 'companyTest4',
    loginCode: 'freeUser',
    isFreeSessionAccessOnly: true,

  },

  {

    firstName: 'test5',
    lastName: 'testovich5',
    company: 'companyTest5',
    loginCode: 'stats',
    hasAccessToStatisticPage: true,

  },

  ];

  const results = [];

  for (const user of usersToSeed) {
    const newUser = new Users();

    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;
    newUser.company = user.company;
    newUser.isAdmin = !!user.isAdmin;
    newUser.isFreeSessionAccessOnly = !!user.isFreeSessionAccessOnly;
    newUser.loginCode = user.loginCode;
    newUser.adminOfTheSessionName = user.adminOfTheSessionName || '';
    // newUser.activeChannel = foundFirstChannel;
    // all users except free have default first channel active

    if (user.isFreeSessionAccessOnly) {
      // TO DO ask for free session channel
      newUser.activeChannel = 2;
    } else {
      newUser.activeChannel = 1;
    }

    results.push(newUser);
  }
  await usersRepository.save(results);
};
