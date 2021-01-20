/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import Channels from '../../entities/channels';

export const seedMockedChannels = async () => {
  const channelsRepository = await getRepository(Channels);

  // test links now
  const channelsToSeed = [{
    number: 1,
    link: 'https://facecast.net/v/pybh3r',
    startChannelSessionLetter: 'Пленарная сессия',
    startChannelSessionDescription: 'Развитие логистики и управление цепями поставок в России и мире: итоги 2020 года, изменения в 2021 г., новые технологии и решения.',
  },

  {
    number: 2,
    link: 'https://www.youtube.com/embed/LXb3EKWsInQ',
    startChannelSessionLetter: 'Сессия B',
    startChannelSessionDescription: 'Комплексные логистические решения для ритейлеров и производителей',
  },
  {
    number: 3,
    link: 'https://www.youtube.com/embed/BHACKCNDMW8',
    startChannelSessionLetter: 'Сессия C',
    startChannelSessionDescription: 'Цифровой транспорт: прозрачное управление затратами и создание конкурентных преимуществ для бизнеса',
  },

  {
    number: 4,
    link: 'https://www.youtube.com/embed/pajbM_jJWnI',
    startChannelSessionLetter: 'WMS DAY-1',
    startChannelSessionDescription: 'Панельная дискуссия директоров по логистике об условиях успеха внедрения WMS',
  },

  ];

  const results = [];

  for (const channel of channelsToSeed) {
    const newChannel = new Channels();

    newChannel.number = channel.number;
    newChannel.link = channel.link;
    newChannel.startChannelSessionLetter = channel.startChannelSessionLetter;
    newChannel.startChannelSessionDescription = channel.startChannelSessionDescription;

    results.push(newChannel);
  }
  await channelsRepository.save(results);
};
