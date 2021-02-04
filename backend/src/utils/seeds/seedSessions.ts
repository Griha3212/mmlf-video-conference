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
      nextSessionDescription: 'Панельная дискуссия директоров по логистике о внедрении WMS',

    },

    {

      name: 'WMS1',
      letter: 'WMS DAY-1',
      description: 'Панельная дискуссия директоров по логистике о внедрении WMS',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Сессия E',
      nextSessionDescription: 'Специальная сессия генерального партнера SAP. Жизнестойкие цепи поставок: 5 трендов 2021 года.',
      voteFoAllSession: true,

    },

    {

      name: 'SessE',
      letter: 'Сессия E',
      description: 'Специальная сессия генерального партнера SAP. Жизнестойкие цепи поставок: 5 трендов 2021 года.',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'WMS DAY-2',
      nextSessionDescription: 'Панельная сессия. Рекомендации по улучшению логистических процессов от директоров по логистике - лидеров рынка',
      voteFoAllSession: true,

    },

    {

      name: 'SessH',
      letter: 'Панельная сессия H',
      description: 'Рекомендации по улучшению логистических процессов от директоров по логистике - лидеров рынка',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Логист года',
      nextSessionDescription: 'Вручение премии "Логист года"',
      voteFoAllSession: true,

    },
    // LogistOfTheYear---------------
    {

      name: 'LogistOfTheYear',
      letter: 'Логист года',
      description: 'Вручение премии "Логист года"',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: 'Вручение премии "Логист года"',

    },
    // Excursions---------------
    {

      name: 'Exc1',
      letter: 'Экскурсия',
      description: 'Автоматизированный распределительный центр компании «ЭТМ»',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: 'Инновационный складской комплекс Группы компаний «Дамате»',
      isSessionForSecondDay: true,
    },

    {

      name: 'Exc2',
      letter: 'Экскурсия',
      description: 'Инновационный складской комплекс Группы компаний «Дамате»',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: 'DarkStore Онлайн ритейлера «Утконос»',
      isSessionForSecondDay: true,
    },

    {

      name: 'Exc3',
      letter: 'Экскурсия',
      description: 'DarkStore Онлайн ритейлера «Утконос»',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: 'Экскурсия на Логистический центр (ЦРЦ Чехов) «М.Видео»',
      isSessionForSecondDay: true,
    },

    {

      name: 'Exc4',
      letter: 'Экскурсия',
      description: 'Экскурсия на Логистический центр (ЦРЦ Чехов) «М.Видео»',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: 'Централизованная складская система НЛМК',
      isSessionForSecondDay: true,
    },

    {

      name: 'Exc5',
      letter: 'Экскурсия',
      description: 'Централизованная складская система НЛМК',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 1),
      nextSessionLetter: 'Экскурсия',
      nextSessionDescription: '',
      isSessionForSecondDay: true,
    },

    // channel 2 --------------------------------------------------------------------------------

    {

      name: 'SessA',
      letter: 'Сессия A',
      description: 'Лучший опыт применения инновационных технологий в логистике',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 2),
      nextSessionLetter: 'WMS DAY-2',
      nextSessionDescription: 'Лучшая практика внедрения и эксплуатации WMS',

    },
    {

      name: 'WMS2',
      letter: 'WMS DAY-2',
      description: 'Лучшая практика внедрения и эксплуатации WMS',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 2),
      nextSessionLetter: 'Сессия G',
      nextSessionDescription: 'Организация логистики при развитии e-com продаж',

    },

    {

      name: 'SessG',
      letter: 'Сессия G',
      description: 'Организация логистики при развитии e-com продаж',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 2),
      nextSessionLetter: 'Логист года',
      nextSessionDescription: 'Вручение премии "Логист года"',

    },

    // channel 3 --------------------------------------------------------------------------------

    {

      name: 'SessB',
      letter: 'Сессия B',
      description: 'Комплексные логистические решения для ритейлеров и производителей',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 3),
      nextSessionLetter: 'Сессия D',
      nextSessionDescription: 'Опыт создания и оптимизации складов и логистических центров',

    },

    {

      name: 'SessD',
      letter: 'Сессия D',
      description: 'Опыт создания и оптимизации складов и логистических центров',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 3),
      nextSessionLetter: 'Сессия J',
      nextSessionDescription: 'Логистика промышленных компаний',
      voteFoAllSession: true,
    },

    {

      name: 'SessJ',
      letter: 'Сессия J',
      description: 'Логистика промышленных компаний',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 3),
      nextSessionLetter: 'Логист года',
      nextSessionDescription: 'Вручение премии "Логист года"',

    },

    // channel 4 --------------------------------------------------------------------------------

    {

      name: 'SessC',
      letter: 'Сессия C',
      description: 'Цифровой транспорт',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 4),
      nextSessionLetter: 'Сессия F',
      nextSessionDescription: 'Опыт оптимизации транспортно-логистического обеспечения компании',

    },

    {

      name: 'SessF',
      letter: 'Сессия F',
      description: 'Опыт оптимизации транспортно-логистического обеспечения компании',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 4),
      nextSessionLetter: 'Специальная сессия I',
      nextSessionDescription: 'Workshop решения задач участников Форума с лидерами КСЛ.Experts',

    },

    {

      name: 'SessI',
      letter: 'Специальная сессия I',
      description: 'Workshop решения задач участников Форума с лидерами КСЛ.Experts',
      channelForShowing: await foundChannels.filter((channel: any) => channel.number === 4),
      nextSessionLetter: 'Логист года',
      nextSessionDescription: 'Вручение премии "Логист года"',
      voteFoAllSession: true,

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
