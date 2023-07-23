import axios from 'axios';
import qs from 'qs';

export type { AxiosRequestConfig } from 'axios';

const BASE_URL = '/api';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  method: 'GET',
  timeout: 1000 * 10,
});

axiosInstance.defaults.paramsSerializer = {
  serialize: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
};
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    // console.log({ url: config.url, params: config.params });
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

export default axiosInstance;
