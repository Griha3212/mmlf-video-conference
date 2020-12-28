import http from 'http';
import * as io from 'socket.io';
import chalk from 'chalk';
import { app } from './app';
/* eslint-disable no-console */

declare global {
  namespace NodeJS {
    interface Global {
      socketServer: io.Server
    }
  }
}

// Get port from environment and store in Express.
const port: Number = parseInt(<string>process.env.PORT, 10) || 3005;
console.log(chalk.yellow('process.env.PORT', process.env.PORT));
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

server.listen(port, () => {
  console.log(chalk.yellow(`Server app listening on port ${port}!`));
});

// sockets
global.socketServer = new io.Server(server, {
  pingInterval: 5000, pingTimeout: 10000, cookie: false,
});
