/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import Channels from '../../entities/channels';

export const seedMockedChannels = async () => {
  const channelsRepository = await getRepository(Channels);

  // test links now
  const channelsToSeed = [{
    number: 1,
    link: 'https://www.youtube.com/embed/wnhvanMdx4s',
    startChannelSessionLetter: 'Пленарная сессия',
    startChannelSessionDescription: 'Развитие логистики и управления цепями поставок в России и мире',
  },

  {
    number: 2,
    link: 'https://www.youtube.com/embed/LXb3EKWsInQ',
    startChannelSessionLetter: 'Сессия A',
    startChannelSessionDescription: 'Лучший опыт применения инновационных технологий в логистике',
  },
  {
    number: 3,
    link: 'https://www.youtube.com/embed/BHACKCNDMW8',
    startChannelSessionLetter: 'Сессия B',
    startChannelSessionDescription: 'Комплексные логистические решения для ритейлеров и производителей',
  },

  {
    number: 4,
    link: 'https://www.youtube.com/embed/pajbM_jJWnI',
    startChannelSessionLetter: 'Сессия С',
    startChannelSessionDescription: 'Цифровой транспорт',
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
