import express, { Request, Response } from 'express';
import { createConnection, getRepository } from 'typeorm';

import errorHandler from './middlewares/error.middleware';
import Users from './entities/users';

// Create a new express application instance
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// TO DO create db for staging/prod version without seeding
createConnection().then(async () => {
  const usersRepository = await getRepository(Users);
  // seed only if dataBase is empty

  const foundUser = await

  await seedMockedUsers();
  await seedMockedSpeakers();
});

module.exports = app;
