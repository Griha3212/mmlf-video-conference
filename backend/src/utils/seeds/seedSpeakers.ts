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

  // --------------------------------------------------------------------- Session D

  {

    lastName: 'МАКСИМОВСКИЙ',
    firstName: 'Александр',

    linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Maksimovskiy.jpg`,
    // innerSystemName: 'Bogachev',
    isModerator: true,
    session: foundSessions.filter((session: any) => session.name === 'SessD'),

  },

  {

    topicName: 'Опыт развития региональных складов',
    lastName: 'КАЗАНОВСКИЙ',
    firstName: 'Павел',
    statusInCompany: 'директор по логистике',
    company: 'Галацентр',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Kazanovskiy.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessD'),

  },

  {

    topicName: 'Оптимизация складских издержек за счет модернизации существующего оборудования',
    lastName: 'ФАТУЛЛАЕВ',
    firstName: 'Роман',
    statusInCompany: 'генеральный директор',
    company: 'ООО «Новейшие Технологии ЛС»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Fatullaev.jpg`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessD'),

  },

  {

    topicName: 'Подходы к реализации технологий современной концепции Dark Store',
    lastName: 'КОБЫЛИН',
    firstName: 'Александр',
    statusInCompany: 'директор по развитию',
    company: 'ОАО «ПКБ «ТЕХНОПРИБОР»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Kobylin.jpg`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessD'),

  },

  {

    topicName: 'Реализованный кейс. Применение различных технологий хранения и обработки грузов на одном складе',
    lastName: 'ИВАНУШКИНА',
    firstName: 'Светлана',
    statusInCompany: 'бренд-менеджер',
    company: 'FirstLogistik',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Ivanushkina.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessD'),

  },

  {

    topicName: 'Как на современном складе оптимизировать учет выдачи, сдачи и хранения ТСД с помощью Инлокер',
    lastName: 'КАЗАРЦЕВ',
    firstName: 'Кирилл',
    statusInCompany: 'генеральный директор',
    company: 'Инфотех',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Kazarcev.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessD'),

  },

  // --------------------------------------------------------------------- Session E

  {

    lastName: 'ТРОИЦКИЙ',
    firstName: 'Андрей',

    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Troickiy.png`,
    // innerSystemName: 'Bogachev',
    isModerator: true,
    session: foundSessions.filter((session: any) => session.name === 'SessE'),

  },

  {

    topicName: '',
    lastName: 'ШАПОЧКА',
    firstName: 'Максим',
    statusInCompany: 'начальник управления по стратегическому развитию Дирекции по логистике',
    company: 'АО «Объединенная металлургическая компания»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shapochka.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessE'),

  },

  {

    topicName: '',
    lastName: 'МАШКОВ',
    firstName: 'Александр',
    statusInCompany: 'директор по логистике',
    company: 'ПАО «Ростелеком»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Mashkov.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessE'),

  },

  {

    topicName: '',
    lastName: 'КЛИМОВА',
    firstName: 'Светлана',
    statusInCompany: 'директор по логистике',
    company: 'АО «Прогресс» (Фруто-Няня)',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Klimova.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessE'),

  },

  {

    topicName: '',
    lastName: 'ШИРЯЕВ',
    firstName: 'Равшан',
    statusInCompany: 'управляющий сетью СЗФО',
    company: 'СТД «Петрович»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shiryaev.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessE'),

  },

  {

    topicName: '',
    lastName: 'ПОЛКОВНИКОВ',
    firstName: 'Вячеслав',
    statusInCompany: 'директор по логистике',
    company: 'ГК «Армтек»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shiryaev.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessE'),

  },

  // --------------------------------------------------------------------- Session F

  {

    lastName: 'УСМАНОВ',
    firstName: 'Эльдар',

    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Troickiy.png`,
    // innerSystemName: 'Bogachev',
    isModerator: true,
    session: foundSessions.filter((session: any) => session.name === 'SessF'),

  },

  {

    topicName: '',
    lastName: 'ШАПОЧКА',
    firstName: 'Максим',
    statusInCompany: 'начальник управления по стратегическому развитию Дирекции по логистике',
    company: 'АО «Объединенная металлургическая компания»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shapochka.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessF'),

  },

  {

    topicName: 'Как грамотно выстроить процессы транспортной логистики и сократить затраты на грузоперевозку',
    lastName: 'ЛОГВИН',
    firstName: 'Александр',
    statusInCompany: 'генеральный директор',
    company: 'S2B',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Logvin.jpg`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessF'),

  },

  {

    topicName: 'Тема уточняется',
    lastName: 'ПЬЯНКОВ',
    firstName: 'Александр',
    statusInCompany: 'директор по 3PL',
    company: 'FESCO',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessF'),

  },

  {

    topicName: 'Тема уточняется',
    lastName: 'Представитель',
    firstName: 'компании',
    statusInCompany: '',
    company: 'ГАЗ',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessF'),

  },

  {

    topicName: 'Оптимизация затрат в цепи поставок с распределением грузов через международный транспортно-логистический и производственный хаб на базе аэропортов Красноярск и Черемшанка',
    lastName: 'НИКОЛАЕВ',
    firstName: 'Алексей',
    statusInCompany: 'директор по развитию',
    company: 'корпорация «Енисейская Сибирь»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessF'),

  },

  // --------------------------------------------------------------------- Session WMS DAY-2

  {

    lastName: 'ЗВЕРЕВ',
    firstName: 'Александр',

    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Troickiy.png`,
    // innerSystemName: 'Bogachev',
    isModerator: true,
    session: foundSessions.filter((session: any) => session.name === 'WMS2'),

  },

  {

    topicName: 'Обязательные условия и мероприятия для удачного выбора и внедрения WMS',
    lastName: 'САНЧЕНКО',
    firstName: 'Никита',
    statusInCompany: 'директор',
    company: 'PSI Logistics Moscow',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Sanchenko.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'WMS2'),

  },

  {

    topicName: 'Продвинутый инструментарий оптимизации затрат в WMS',
    lastName: 'БЛИНОВ',
    firstName: 'Дмитрий',
    statusInCompany: 'технический директор',
    company: 'LogistiX',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Blinov.jpg`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'WMS2'),

  },

  {

    topicName: 'Тема уточняется',
    lastName: 'Представитель',
    firstName: 'компании',
    statusInCompany: '',
    company: 'Solvo',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'WMS2'),

  },

  {

    topicName: 'Тема уточняется',
    lastName: 'Представитель',
    firstName: 'компании',
    statusInCompany: '',
    company: 'КорусКонсалтинг',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'WMS2'),

  },

  {

    topicName: 'Технология goods-to-person на примере роя роботов',
    lastName: 'ПИВОВАР',
    firstName: 'Александр',
    statusInCompany: '',
    company: 'Solvo',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'WMS2'),

  },

  // --------------------------------------------------------------------- Session G

  {

    lastName: 'СОКОЛОВ',
    firstName: 'Алексей',

    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Sokolov.png`,
    // innerSystemName: 'Bogachev',
    isModerator: true,
    session: foundSessions.filter((session: any) => session.name === 'SessG'),

  },

  {

    topicName: 'Как e-commerce теряет клиентов из-за логистики?',
    lastName: 'ШИРЯЕВ',
    firstName: 'Равшан',
    statusInCompany: 'управляющий сетью СЗФО',
    company: 'СТД «Петрович»',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shiryaev.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessG'),

  },

  {

    topicName: 'E-comerсe: автоматизация мезонина',
    lastName: 'ГОРСКИЙ',
    firstName: 'Виталий',
    statusInCompany: '',
    company: 'COMITAS',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessG'),

  },

  {

    topicName: 'Изменение форматов логистики в условиях роста онлайн продаж',
    lastName: 'ОБРАЗЦОВА',
    firstName: 'Елена',
    statusInCompany: 'директор по операциям',
    company: 'Утконос',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessG'),

  },

  {

    topicName: 'Концепт microfullfilment центра на примере кейса commonsense',
    lastName: 'ШУЛЬЦ',
    firstName: 'Александр',
    statusInCompany: 'директор по логистике',
    company: 'DECATHLON',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Shulz.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessG'),

  },

  {

    topicName: 'Оптимизации процессов для сокращения срока запуска фулфилмент-центра',
    lastName: 'ДИБРОВА',
    firstName: 'Алексей',
    statusInCompany: 'руководитель инжиниринговой группы',
    company: 'Ozon',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Dibrova.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessG'),

  },

  {

    topicName: 'Логистическая поддержка при развитии e-com продаж',
    lastName: 'Представитель',
    firstName: 'компании',
    statusInCompany: 'руководитель инжиниринговой группы',
    company: 'Сберлогистика',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessG'),

  },

  // --------------------------------------------------------------------- Session H

  {

    lastName: 'ДЕМИН',
    firstName: 'Василий',

    linkToImg: `${process.env.BACKEND_URL}/img/speakers/per_Demin.png`,
    // innerSystemName: 'Bogachev',
    isModerator: true,
    session: foundSessions.filter((session: any) => session.name === 'SessH'),

  },

  {

    topicName: '',
    lastName: 'ЯНКОВИЧ',
    firstName: 'Антонина',
    statusInCompany: 'директор по логистике',
    company: 'Mercury',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Yankovich.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessH'),

  },

  {

    topicName: '',
    lastName: 'ФАРАФОНОВ',
    firstName: 'Алексей',
    statusInCompany: '',
    company: '',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Pharaphonov.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessH'),

  },

  {

    topicName: '',
    lastName: 'БЕРТОВА',
    firstName: 'Татьяна',
    statusInCompany: '',
    company: '',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Bertova.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessH'),

  },

  {

    topicName: '',
    lastName: 'ШТЫКОВ',
    firstName: 'Павел',
    statusInCompany: '',
    company: '',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessH'),

  },

  {

    topicName: '',
    lastName: 'ХРИСТЕНКО',
    firstName: 'Леонид',
    statusInCompany: '',
    company: '',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessH'),

  },

  {

    topicName: '',
    lastName: 'СУРМАЧ',
    firstName: 'Сергей',
    statusInCompany: '',
    company: '',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessH'),

  },

  {

    topicName: '',
    lastName: 'ВОЙТИКОВ',
    firstName: 'Константин',
    statusInCompany: '',
    company: '',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessH'),

  },

  {

    topicName: '',
    lastName: 'РАБАЕВ',
    firstName: 'Роман',
    statusInCompany: '',
    company: '',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Rabaev.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessH'),

  },

  // --------------------------------------------------------------------- Session I

  {

    topicName: '',
    lastName: 'АДУШЕВ',
    firstName: 'Дмитрий',
    statusInCompany: 'директор по логистике',
    company: 'Mercury',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessI'),

  },

  {

    topicName: '',
    lastName: 'УРИН',
    firstName: 'Вадим',
    statusInCompany: 'директор по логистике',
    company: 'Mercury',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/Urin.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessI'),

  },

  {

    topicName: '',
    lastName: 'КЛИМОВА',
    firstName: 'Светлана',
    statusInCompany: 'директор по логистике',
    company: 'Mercury',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessI'),

  },

  {

    topicName: '',
    lastName: 'ВЕДЕНЕЕВ',
    firstName: 'Денис',
    statusInCompany: 'директор по логистике',
    company: 'Mercury',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessI'),

  },

  {

    topicName: '',
    lastName: 'Представитель',
    firstName: 'компании',
    statusInCompany: 'директор по логистике',
    company: 'Mercury',
    linkToImg: `${process.env.BACKEND_URL}/img/speakers/no_photo.png`,

    linkToZoom: 'https://ya.ru/',
    linkToPresentation: '',

    // innerSystemName: 'Liharev_Plenar',

    session: foundSessions.filter((session: any) => session.name === 'SessI'),

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
