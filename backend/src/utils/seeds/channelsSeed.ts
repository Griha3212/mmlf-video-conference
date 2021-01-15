/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { getRepository } from 'typeorm';
import Channels from '../../entities/channels';
import Sessions from '../../entities/sessions';
import Users from '../../entities/users';

export const seedMockedChannels = async () => {
  const channelsRepository = await getRepository(Channels);

  const channelsToSeed = [{
    number: 1,
    link: 'https://facecast.net/v/pybh3r',
  },

  {
    number: 2,
    link: 'https://facecast.net/v/pybh3r',
  },
  {
    number: 3,
    link: 'https://facecast.net/v/pybh3r',
  },

  {
    number: 4,
    link: 'https://facecast.net/v/pybh3r',
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
