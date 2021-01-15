/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import express, { Request, Response } from 'express';
import { createConnection, getRepository } from 'typeorm';
import chalk from 'chalk';
import cors from 'cors';
import compression from 'compression';
import passport from 'passport';
import errorHandler from './middlewares/error.middleware';
import Users from './entities/users';
import { seedMockedUsers } from './utils/seeds/seedUsers';
import { router as authRouter } from './routes/auth.route';
import { router as userRouter } from './routes/user.route';
import { jwtStrategy, jwtStrategyIsAdmin, localSignInStrategy } from './passportStrategy';
import { seedMockedChannels } from './utils/seeds/channelsSeed';
import { seedMockedSessions } from './utils/seeds/seedSessions';
import { seedMockedSpeakers } from './utils/seeds/seedSpeakers';

// Create a new express application instance
export const app = express();

// passport and strategies initialization
app.use(passport.initialize());
app.use(localSignInStrategy.initialize());
app.use(jwtStrategy.initialize());
app.use(jwtStrategyIsAdmin.initialize());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(express.static('public'));
app.use(cors());
app.use(compression());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// console.log('process.env.JWT_SECRET :>> ', process.env.JWT_SECRET);

// TO DO create db for staging/prod version without seeding
createConnection().then(async () => {
  // seed only if dataBase is empty

  const countOfUsers = await getRepository(Users)
    .createQueryBuilder('user')
    .getCount();

  if (countOfUsers === 0) {
    console.log(chalk.yellow('Found 0 users, mocking data'));
    await seedMockedUsers();
    console.log(chalk.yellow('Users mocking complete'));
    await seedMockedChannels();
    console.log(chalk.yellow('Channels mocking complete'));
    await seedMockedSessions();
    console.log(chalk.yellow('Sessions mocking complete'));
    await seedMockedSpeakers();
    console.log(chalk.yellow('Speakers mocking complete'));
  }

  // const foundUser = await usersRepository.find

  // await seedMockedSpeakers();
});
