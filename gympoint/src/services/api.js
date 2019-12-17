import axios from 'axios';
import { store } from '~/store';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(config => {
  const { token } = store.getState().auth;

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
