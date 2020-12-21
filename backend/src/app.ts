/* eslint-disable no-console */
import chalk from 'chalk';
import express, { Request, Response } from 'express';

import * as io from 'socket.io';

const port: Number = 3005;
console.log(chalk.yellow('process.env.PORT', process.env.PORT));

declare global {
  namespace NodeJS {
    interface Global {
      SocketServer: io.Server
    }
  }
}

// Create a new express application instance
export const app: express.Application = express();

const server = app.listen(port, () => {
  console.log(chalk.yellow(`Example app listening on port ${port}!`));
});

// sockets
global.SocketServer = io.listen(server, { pingInterval: 5000, pingTimeout: 10000, cookie: false });

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
