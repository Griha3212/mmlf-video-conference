/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import api from '../core/api';

// User logs in
export const apiRegister = async (
  // userName: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  mobileNumber: string,
  recieveSMSMessages: string,
  recieveEmailMessages: string,
) => {
  const url = `${process.env.REACT_APP_API_URL}${api.login}`;
  const { data } = await axios.post(url, {
    // userName,
    firstName,
    lastName,
    email,
    password,
    mobileNumber,
    recieveSMSMessages: recieveSMSMessages || false,
    recieveEmailMessages: recieveEmailMessages || false,
  });
  return data;
};
