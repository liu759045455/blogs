import axios from '@/axios';

export default {
  getLearnList(params) {
    return axios.get('/api/learnlist', { params });
  },

  updateLearnList(id, params) {
    return axios.put(`/api/content/${id}`, params);
  },
};
