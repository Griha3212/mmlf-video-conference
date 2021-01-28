/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import Sessions from '../../entities/sessions';
import Speakers from '../../entities/speakers';

export const seedMockedSpeakers = async () => {
  const speakersRepository = await getRepository(Speakers);
  const sessionsRepository = await getRepository(Sessions);

  const foundSessions: any = await sessionsRepository.find();

  // --------------------------------------------------------------------- Plenar Session
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
    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',
    topicName: 'Тренды, вызовы и задачи в логистике non-food ритейла в 2021 г.',
    innerSystemName: 'Dementeva_Plenar',
    statusInCompany: 'директор по логистике',
    session: foundSessions.filter((session: any) => session.name === 'Plenar'),

  },

  {

    topicName: 'Как изменится цепочка поставок ритейлеров и поставщиков в 2021 г.',
    lastName: 'ШУЛЬГА',
    firstName: 'Денис',
    statusInCompany: 'директор по логистике',
    company: 'X5 Retail Group',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shulga.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    innerSystemName: 'Shulga_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'Plenar'),

  },

  {

    topicName: 'Формирование стратегии логистики компании: конкурентные преимущества и лучшие решения',
    lastName: 'ДЕМИН',
    firstName: 'Василий',
    statusInCompany: 'д.т.н., заместитель директора',
    company: 'Координационный совет по логистике',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Demin.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    innerSystemName: 'Demin_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'Plenar'),
    hasSendContactsButton: true,

  },

  {

    topicName: 'От карго-культа к мани-майнингу: как сделать деньги на логистических и информационных технологиях',
    lastName: 'ЛИХАРЕВ',
    firstName: 'Сергей',
    statusInCompany: 'вице-президент по логистике',
    company: 'ПАО «НЛМК»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_LIHAREV.jpg`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'Plenar'),

  },

  // --------------------------------------------------------------------- Session A

  {

    lastName: 'БОГАЧЕВ',
    firstName: 'Игорь',

    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Bogachev.png`,
    innerSystemName: 'Bogachev',
    isModerator: true,
    session: foundSessions.filter((session: any) => session.name === 'SessA'),

  },

  {

    lastName: 'ЕЛЕЦКИХ ',
    firstName: 'Илья',

    company: 'Coca-Cola HBC Россия',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Eleckih.png`,
    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',
    topicName: 'Трансформация рынка и цифровизация управления логистикой',
    innerSystemName: 'Eleckih',
    statusInCompany: 'директор по развитию и инновациям функции снабжения',
    session: foundSessions.filter((session: any) => session.name === 'SessA'),

  },

  {

    topicName: '7 хороших вопросов вендору логистической платформы',
    lastName: 'ГАВРИЛОВ',
    firstName: 'Алексей',
    statusInCompany: 'руководитель направления «Управление производством и цепочками поставок',
    company: 'SAP CIS',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Gavrilov.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessA'),

  },

  {

    topicName: 'Математика и доставка. Кейсы трансформации бизнеса в цифрах',
    lastName: 'МАКЕЕВ',
    firstName: 'Алексей',
    statusInCompany: 'CEO',
    company: 'VeeRoute Consulting',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Makeev.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessA'),

  },

  {

    topicName: 'Логистика на пользу конкурентноспособности',
    lastName: 'МАШКОВ',
    firstName: 'Александр',
    statusInCompany: 'директор по логистике',
    company: 'ПАО «Ростелеком»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Mashkov.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessA'),

  },

  // --------------------------------------------------------------------- Session B

  {

    lastName: 'МАРТЬЯНОВ',
    firstName: 'Антон',

    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Martyanov.png`,
    // innerSystemName: 'Bogachev',
    isModerator: true,
    session: foundSessions.filter((session: any) => session.name === 'SessB'),

  },

  {

    topicName: 'Как изменилась логистика европейских производителей и ритейлеров в 2020 г.?',
    lastName: 'VAL',
    firstName: 'Susana',
    statusInCompany: 'prof. Dr., Director',
    company: 'Zaragoza Logistics Center (ZLC)',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Val.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessB'),

  },

  {

    topicName: 'Управление потоками товаров в ритейле',
    lastName: 'ФИЛИМОНОВА',
    firstName: 'Наталья',
    statusInCompany: 'директор департамента по операционному планированию',
    company: 'Х5 Retail Group',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessB'),

  },

  {

    topicName: 'Опыт развития логистики компании-производителя при работе с торговыми сетями',
    lastName: 'КЛИМОВА',
    firstName: 'Светлана',
    statusInCompany: 'директор по логистике',
    company: 'АО «Прогресс» (Фруто-Няня)',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Klimova.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessB'),

  },

  {

    topicName: 'Опыт внедрения методологии DDMRP в управлении запасами и планировании цепи поставок в компании-производителе медицинской техники в условиях непредсказуемого изменения спроса в 2020 г.',
    lastName: 'АМПЛЕЕВ',
    firstName: 'Андрей',
    statusInCompany: 'директор по ИТ',
    company: 'ЗАО "Завод ЭМА"',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessB'),

  },

  {

    topicName: '"Вакцина" для поставщиков: цифровизация логистики на пути к федеральному ритейлу',
    lastName: 'БЕЗЕНКОВ',
    firstName: 'Денис',
    statusInCompany: 'директор по развитию',
    company: 'SpaceCargo.ru',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Bezenkov.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessB'),

  },

  // --------------------------------------------------------------------- Session C

  {

    lastName: 'РОХМАН',
    firstName: 'Дмитрий',

    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Rohman.png`,
    // innerSystemName: 'Bogachev',
    isModerator: true,
    session: foundSessions.filter((session: any) => session.name === 'SessC'),

  },

  {

    topicName: 'KPI клиентоцентричной логистики',
    lastName: 'ЛЕОНТЬЕВ',
    firstName: 'Дмитрий',
    statusInCompany: 'руководитель направления «Логистика»',
    company: 'Группа компаний СВЕЗА',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessC'),

  },

  {

    topicName: 'Цифровизация всей цепочки автомобильных грузоперевозок: от грузовладельца до водителя',
    lastName: 'ВИЛЬДЕ',
    firstName: 'Святослав',
    statusInCompany: 'управляющий',
    company: 'ATI.SU',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Vilde.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessC'),

  },

  {

    topicName: 'Тема уточняется',
    lastName: 'ФАМИЛИЯ',
    firstName: 'Имя',
    statusInCompany: 'Представитель компании',
    company: 'Умная логистика',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessC'),

  },

  {

    topicName: 'TMS-платформа как система «одного окна» для полной автоматизации всей логистики',
    lastName: 'ФАМИЛИЯ',
    firstName: 'Имя',
    statusInCompany: 'Представитель компании',
    company: 'AllTrucks online',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessC'),

  },

  // --------------------------------------------------------------------- WMS DAY-1

  {

    lastName: 'БАДУЛИНА',
    firstName: 'Марина',

    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Badulina.png`,
    // innerSystemName: 'Bogachev',
    isModerator: true,
    session: foundSessions.filter((session: any) => session.name === 'WMS1'),

  },

  {

    topicName: '',
    lastName: 'УРИН',
    firstName: 'Вадим',
    statusInCompany: 'директор по логистике',
    company: 'S3',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Urin.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'WMS1'),

  },

  {

    topicName: '',
    lastName: 'САПЕЛКИН',
    firstName: 'Алексей',
    statusInCompany: 'директор по развитию логистики',
    company: 'Bezant',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Sapelkin.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'WMS1'),

  },

  {

    topicName: '',
    lastName: 'ВОРОБЬЕВ',
    firstName: 'Юрий',
    statusInCompany: 'директор по логистике',
    company: 'Ralf Ringer',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Vorobev.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'WMS1'),

  },

  {

    topicName: '',
    lastName: 'ЦАЦУЛИН',
    firstName: 'Алексей',
    statusInCompany: 'директор по логистике',
    company: 'Белуга',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Caculin.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'WMS1'),

  },

  {

    topicName: '',
    lastName: 'КОНОВ',
    firstName: 'Максим',
    statusInCompany: 'руководитель проектов',
    company: 'Координационный совет по логистике',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Konov.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'WMS1'),

  },

  {

    topicName: '',
    lastName: 'ФАМИЛИЯ',
    firstName: 'Имя',
    statusInCompany: 'представитель компании',
    company: 'ПАО «Мосэнерго»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'WMS1'),

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
    newSpeaker.sessions = speaker.session[0];
    newSpeaker.statusInCompany = speaker.statusInCompany || '';
    newSpeaker.hasSendContactsButton = speaker.hasSendContactsButton || false;

    results.push(newSpeaker);
  }
  await speakersRepository.save(results);
};
