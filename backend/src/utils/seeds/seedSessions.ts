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

  const sessionsToSeed = [

    // channel 1 -----------------------------------------------------------------------------------
    {

      name: 'Plenar',
      letter: 'Пленарная сессия',
      description: 'Развитие логистики и управления цепями поставок в России и мире: итоги 2020 года, изменения в 2021 г., новые технологии и решения.',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'WMS DAY-1',
      nextSessionDescription: 'Панельная дискуссия директоров по логистике об условиях успеха внедрения WMS',
      isSessionForSecondDay: false,
    },

    {

      name: 'WMS1',
      letter: 'WMS DAY-1',
      description: 'Панельная дискуссия директоров по логистике об условиях успеха внедрения WMS',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Сессия E',
      nextSessionDescription: 'Специальная сессия партнера Форума – компании SAP. Жизнестойкие цепи поставок: 5 трендов 2021 года',
      voteFoAllSession: true,
      isSessionForSecondDay: false,
    },

    {

      name: 'SessE',
      letter: 'Сессия E',
      description: 'Специальная сессия партнера Форума – компании SAP. Жизнестойкие цепи поставок: 5 трендов 2021 года',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'WMS DAY-2',
      nextSessionDescription: 'Лучшая практика внедрения и эксплуатации WMS',
      voteFoAllSession: true,
      isSessionForSecondDay: false,
    },

    {

      name: 'SessH',
      letter: 'Панельная сессия H',
      description: 'Рекомендации по улучшению логистических процессов от директоров по логистике - лидеров рынка',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Логист года',
      nextSessionDescription: 'Вручение премии "Логист года"',
      voteFoAllSession: true,
      isSessionForSecondDay: false,
    },

    {

      name: 'LogistOfTheYear',
      letter: 'Логист года',
      description: 'Вручение премии "Логист года"',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: 'Вручение премии "Логист года"',
      voteFoAllSession: true,
      isSessionForSecondDay: false,
    },

    // TO DO, add all excursions in first channel
    /// channel 1 ----------------------------------------------------------------------------------

    {

      name: 'SessA',
      letter: 'Сессия A',
      description: 'Лучший опыт применения инновационных технологий в логистике',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Сессия D',
      nextSessionDescription: 'Опыт создания и оптимизации работы складов и логистических центров',

    },
    {

      name: 'SessB',
      letter: 'Сессия B',
      description: 'Комплексные логистические решения для ритейлеров и производителей',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 2),
      nextSessionLetter: 'Сессия E',
      nextSessionDescription: 'Специальная сессия партнера Форума – компании SAP Жизнестойкие цепи поставок: 5 трендов 2021 года',

    },

    {

      name: 'SessC',
      letter: 'Сессия C',
      description: 'Цифровой транспорт: прозрачное управление затратами и создание конкурентных преимуществ для бизнеса',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 3),
      nextSessionLetter: 'Сессия F',
      nextSessionDescription: 'Опыт оптимизации транспортно-логистического обеспечения компании',

    },

  ];

  const results = [];

  for (const session of sessionsToSeed) {
    const newSession = new Sessions();

    newSession.name = session.name;
    newSession.letter = session.letter;
    newSession.description = session.description;
    newSession.channelForShowing = session.channelForShowing[0];
    newSession.nextSessionLetter = session.nextSessionLetter;
    newSession.nextSessionDescription = session.nextSessionDescription;
    newSession.voteFoAllSession = session.voteFoAllSession || false;
    newSession.isSessionForSecondDay = session.isSessionForSecondDay || false;

    results.push(newSession);
  }
  await sessionsRepository.save(results);
};
