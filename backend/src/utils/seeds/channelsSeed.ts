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
  },

  {
    number: 2,
    link: 'https://www.youtube.com/embed/LXb3EKWsInQ',
  },
  {
    number: 3,
    link: 'https://www.youtube.com/embed/BHACKCNDMW8',
  },

  {
    number: 4,
    link: 'https://www.youtube.com/embed/pajbM_jJWnI',
  },

  ];

  const results = [];

  for (const channel of channelsToSeed) {
    const newChannel = new Channels();

    newChannel.number = channel.number;
    newChannel.link = channel.link;

    results.push(newChannel);
  }
  await channelsRepository.save(results);
};
