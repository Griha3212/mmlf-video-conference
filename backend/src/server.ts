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

// console.log('process.env.UI_URL :>> ', process.env.UI_URL);

// sockets
global.socketServer = new io.Server(server, {
  pingInterval: 5000,
  pingTimeout: 10000,
  cookie: false,
  cors: {
    origin: `${process.env.UI_URL}`,
    methods: ['GET', 'POST'],
  },
});

global.socketServer.on('connection', (socket) => {
  socket.emit('giveMeConnectionInfo', ('hello'));

  // dealRoomId as room
  // socket.on('connectToDealRoom', (dealRoomId) => {
  //   const room = dealRoomId;
  //   socket.join(room);
  //   console.log(`connectedToDealRoom: ${dealRoomId}`);
  // });

  // id as room
  socket.on('connectToPersonalRoom', (id: number) => {
    const room = id;
    socket.join(room);
    console.log(chalk.blueBright.underline(`connectedToPersonalRoom: ${room}`));
  });

  // socket.on('sendMessage', async (data) => {
  //   console.log('sending message', data);
  //   await saveMessageInDataBaseAndSendToDealRoomChat(data);
  // });

  // // NP sockets
  // socket.on('changeNP', async (data) => {
  //   await updateNPInDataBaseAndSendToDealRoom(data);
  // });

  // socket.on('agreeNP', async (data) => {
  //   await agreeWithNPInDataBaseAndSendToDealRoom(data);
  // });

  // // Post trade steps sockets
  // socket.on('changePTS', async (data) => {
  //   await updatePTSInDataBaseAndSendToDealRoom(data);
  // });

  // socket.on('agreePTS', async (data) => {
  //   await agreeWithPTSInDataBaseAndSendToDealRoom(data);
  // });

  // // Post trade steps sockets
  // socket.on('changeTimer', async (data) => {
  //   await updateDealTimerForBothSides(data);
  // });

  // socket.on('agreeTimer', async (data) => {
  //   await agreedDealTimerForBothSides(data);
  // });

  // socket.on('changeShipToAddress', async (data) => {
  //   await updateShipToAddress(data);
  // });
});
