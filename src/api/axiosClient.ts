import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from '../utils/tokenHelper';

const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getToken() || '';
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${getToken()}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error?.status && error.status >= 500) {
    } else if (error?.status && error.status === 404) {
    } else {
      return Promise.reject(error);
    }
  },
);

export default axiosClient;
