/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import api from '../core/api';
// import request from './apiRequest';

// Login
export const apiChangeActiveSpeakerInChannel = async (
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },
  speakerIdToActivate: number,
  channelForShowingId: number,
): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.login}`;

  try {
    const { data } = await axios.post(url, { speakerIdToActivate, channelForShowingId }, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};
