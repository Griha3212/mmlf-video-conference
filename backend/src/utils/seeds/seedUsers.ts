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

    firstName: 'test3',
    lastName: 'testovich3',
    company: 'companyTest3',
    loginCode: 'admin',
    isAdmin: true,

  },

  {

    firstName: 'test4',
    lastName: 'testovich4',
    company: 'companyTest4',
    loginCode: 'subadmin',
    isSubAdmin: true,

  },

  ];

  const results = [];

  for (const user of usersToSeed) {
    const newUser = new Users();

    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;
    newUser.company = user.company;
    newUser.isAdmin = !!user.isAdmin;
    newUser.isSubAdmin = !!user.isSubAdmin;

    results.push(newUser);
  }
  await usersRepository.save(results);
};
