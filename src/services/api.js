import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL, API_KEY, PRIVATE_KEY} from '@utils/constants';
import md5 from 'md5';

const api = axios.create({
  baseURL: `${BASE_URL}`,
});

api.interceptors.request.use(async config => {
  const TIMESTAMP = new Date().getTime();
  config.url = `${config.url}${
    config.url.includes('?') ? '&' : '?'
  }ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${md5(
    TIMESTAMP + PRIVATE_KEY + API_KEY,
  )}`;
  return config;
});

export default api;
