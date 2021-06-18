import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleInfo: {},
    comId: 0,
  },
  mutations: {
    setArticle(state, val) {
      state.articleInfo = val;
    },
  },
  actions: {
    setArticle({ commit }, val) {
      commit('setArticle', val);
    },
  },
  modules: {
  },
});
