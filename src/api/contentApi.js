import axios from '@/axios';

export default {
  getContent(params) {
    return axios.get('/api/content', { params });
  },

  updateContent(id, params) {
    return axios.put(`/api/content/${id}`, params);
  },

  getContentId(id) {
    return axios.get(`/api/content/${id}`);
  },
};
