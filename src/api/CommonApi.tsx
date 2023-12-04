import axios from 'axios';
import {MMKVLoader} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();

export const BASE_API = axios.create({
  // baseURL: 'https://prod.deunku.com',
  responseType: 'json',
  withCredentials: true,
});

BASE_API.interceptors.request.use(async config => {
  const accessToken = await MMKV.getStringAsync('accessToken');

  console.log(accessToken);
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }

  return config;
});
