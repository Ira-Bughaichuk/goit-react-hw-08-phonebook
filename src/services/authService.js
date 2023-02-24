import { privateAPI, publicAPI } from '../http/http';

export const token = {
  set: token => {
    privateAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    privateAPI.defaults.headers.common.Authorization = '';
  },
};

export const registerService = async credentials => {
  console.log(credentials);
  const { data } = await publicAPI.post('users/signup', credentials);
  return data;
};

export const logInService = async credentials => {
  const { data } = await publicAPI.post('users/login', credentials);
  return data;
};

export const logOutService = () => {
  return privateAPI.post('users/logout');
};

export const refreshUserService = async () => {
  const { data } = await privateAPI.get('users/current');
  return data;
};
