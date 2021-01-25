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
    loginCode: 'admin1',
    adminOfTheChannelNumber: 1,
    isAdmin: true,

  },

  {

    firstName: 'admin',
    lastName: 'A',
    company: 'CCL',
    loginCode: 'admin2',
    adminOfTheChannelNumber: 2,
    isAdmin: true,

  },

  {

    firstName: 'admin',
    lastName: 'B',
    company: 'CCL',
    loginCode: 'admin3',
    adminOfTheChannelNumber: 3,
    isAdmin: true,

  },

  {

    firstName: 'admin',
    lastName: 'C',
    company: 'CCL',
    loginCode: 'admin4',
    adminOfTheChannelNumber: 4,
    isAdmin: true,

  },

  {

    firstName: 'test4',
    lastName: 'testovich4',
    company: 'companyTest4',
    loginCode: 'freeUser',

  },

  {

    firstName: 'stats',
    lastName: 'stats',
    company: 'CCL',
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
    newUser.loginCode = user.loginCode;
    newUser.adminOfTheChannelNumber = user.adminOfTheChannelNumber || 0;
    newUser.hasAccessToStatisticPage = user.hasAccessToStatisticPage || false;
    // all users have default first channel active
    newUser.activeChannel = 1;

    results.push(newUser);
  }
  await usersRepository.save(results);
};
