import { store } from '@store';
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { history } from '@utils/history';

const __DEV__ = process.env.NODE_ENV === 'development';

const Instance = Axios.create({
  timeout: 20000,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },

  paramsSerializer(params: { [x: string]: any }) {
    const searchParams = new URLSearchParams();
    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(params)) {
      const param = params[key];
      if (param !== undefined) {
        if (Array.isArray(param)) {
          param.forEach((p, i) => {
            searchParams.append(`${key}[${i}]`, p);
          });
        } else {
          searchParams.append(key, param);
        }
      }
    }
    return searchParams.toString();
  },
});

Instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const state = store.getState();
    const accessToken = state.auth.accessToken;
    if (accessToken !== null) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  },
  (error: any) => {
    if (__DEV__) {
      console.error('API Request Error:', error);
    }
    return Promise.reject(error);
  },
);

Instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data.Data;
  },
  async (error: AxiosError<any>) => {
    if (__DEV__) {
      console.error('API Response Error:', error);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { response, config } = error;
    if (response?.status === 401) {
      history.push('/login');
    }

    // TODO: handle refresh token
    // if (response.data.status === 403) {
    //  ...something
    // }

    const errorMessage = error?.response?.data?.Message;
    if (errorMessage) {
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.reject(error);
  },
);

export default Instance;
