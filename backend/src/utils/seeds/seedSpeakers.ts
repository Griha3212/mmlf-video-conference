/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import Sessions from '../../entities/sessions';
import Speakers from '../../entities/speakers';

export const seedMockedSpeakers = async () => {
  const speakersRepository = await getRepository(Speakers);
  const sessionsRepository = await getRepository(Sessions);

  const foundSessions: any = await sessionsRepository.find();

  const speakersToSeed = [{

    firstName: 'Ырысбек',
    lastName: 'ТАШБАЕВ',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Tashbayev.jpg`,
    innerSystemName: 'Tashbaev_Plenar',
    isModerator: true,
    session: foundSessions.filter((session: any) => session.name === 'Plenar'),

  },

  {
    lastName: 'MARINUS',
    firstName: 'Jos',

    company: 'Бельгийская Логистическая Ассоциация (VIB), г. Брюссель',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Marinus.jpg`,
    linkToZoom: '',
    linkToPresentation: '',
    topicName: 'Обзор методов и технологий в Цепях поставок, которые выбраны европейскими компаниями для поддержки устойчивости и развития в 2021 г.',
    innerSystemName: 'Marinus_Plenar',
    statusInCompany: 'президент',
    session: foundSessions.filter((session: any) => session.name === 'Plenar'),

  },
  {

    lastName: 'ДЕМЕНТЬЕВА',
    firstName: 'Ирина',

    company: 'Группа «М.Видео-Эльдорадо»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Dementeva.png`,
    linkToZoom: '',
    linkToPresentation: '',
    topicName: 'Тренды, вызовы и задачи в логистике non-food ритейла в 2021 г.',
    innerSystemName: 'Dementeva_Plenar',
    statusInCompany: 'директор по логистике',
    session: foundSessions.filter((session: any) => session.name === 'Plenar'),

  },

  {

    lastName: 'БОГАЧЕВ',
    firstName: 'Игорь',

    linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Tashbayev.jpg`,
    innerSystemName: 'Bogachev',
    isModerator: true,
    session: foundSessions.filter((session: any) => session.name === 'SessA'),

  },

  {

    lastName: 'ЕЛЕЦКИХ ',
    firstName: 'Илья',

    company: 'Coca-Cola HBC Россия',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Eleckih.png`,
    linkToZoom: '',
    linkToPresentation: '',
    topicName: 'Трансформация рынка и цифровизация управления логистикой',
    innerSystemName: 'Eleckih',
    statusInCompany: 'директор по логистике',
    session: foundSessions.filter((session: any) => session.name === 'SessA'),

  },

  ];

  const results = [];

  for (const speaker of speakersToSeed) {
    const newSpeaker = new Speakers();

    newSpeaker.firstName = speaker.firstName;
    newSpeaker.lastName = speaker.lastName;
    newSpeaker.company = speaker.company || '';
    newSpeaker.linkToZoom = speaker.linkToZoom || '';
    newSpeaker.linkToImg = speaker.linkToImg || '';
    newSpeaker.linkToPresentation = speaker.linkToPresentation || '';
    newSpeaker.topicName = speaker.topicName || '';
    newSpeaker.innerSystemName = speaker.innerSystemName || '';
    newSpeaker.isModerator = speaker.isModerator || false;
    newSpeaker.session = speaker.session;

    results.push(newSpeaker);
  }
  await speakersRepository.save(results);
};
