import { ACCESS_TOKEN } from '../constant';

const setToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

const getToken = (): string => {
  return localStorage.getItem(ACCESS_TOKEN) || '';
};

export { setToken, getToken };
