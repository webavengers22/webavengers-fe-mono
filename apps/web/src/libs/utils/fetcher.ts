import axiosInstance from './axiosInstance';

const fetcher = <T = any>(url: string, params?: any) =>
  axiosInstance.get<T>(url, { params }).then((res) => res.data);

export default fetcher;
