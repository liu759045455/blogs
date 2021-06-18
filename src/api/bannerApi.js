import axios from '@/axios';

export default {
  getImage(params) {
    return axios.get('/api/image', { params });
  },
};
