/* eslint-disable prefer-destructuring */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import Channels from '../../entities/channels';
import Sessions from '../../entities/sessions';

export const seedMockedSessions = async () => {
  const sessionsRepository = await getRepository(Sessions);
  const channelsRepository = await getRepository(Channels);

  const foundChannels: any = await channelsRepository.find();

  const sessionsToSeed = [{

    name: 'Plenar',
    letter: 'Пленарная сессия',
    description: 'Развитие логистики и управление цепями поставок в России и мире: итоги 2020 года, изменения в 2021 г., новые технологии и решения.',
    channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),

  },

  {

    name: 'SessA',
    letter: 'Сессия A',
    description: 'Лучший опыт применения инновационных технологий в логистике',
    channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),

  },
  {

    name: 'SessB',
    letter: 'Сессия B',
    description: 'Комплексные логистические решения для ритейлеров и производителей',
    channelForShowing: await foundChannels.filter((channel: any) => channel.number === 2),

  },

  ];

  const results = [];

  for (const session of sessionsToSeed) {
    const newSession = new Sessions();

    newSession.name = session.name;
    newSession.letter = session.letter;
    newSession.description = session.description;
    newSession.channelForShowing = session.channelForShowing[0];

    results.push(newSession);
  }
  await sessionsRepository.save(results);
};
