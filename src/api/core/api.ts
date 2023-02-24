import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { getCookie } from '../../utils/cookieFn';

export const token = getCookie('accessToken');

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://www.meewang.store',
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
};

export const request = axios.create(axiosConfig);

request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error.message);
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);
