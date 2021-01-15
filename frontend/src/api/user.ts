/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import api from '../core/api';
// import request from './apiRequest';

// Login
export const apiGetUser = async (
  userId: string,
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  },

): Promise<any> => {
  const url = `${process.env.REACT_APP_API_URL}${api.getUser}${userId}`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};
