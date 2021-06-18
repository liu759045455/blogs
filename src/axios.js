import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:9526/',
});

instance.interceptors.response.use((config) => {
  if (config.status === 200) {
    return Promise.resolve(config.data.data);
  }
  return config.data;
}, (error) => Promise.reject(error));

export default instance;
