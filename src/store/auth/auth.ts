import { Module } from "vuex";

const authStore: Module<any, any> = {
  namespaced: true,

  state: {
    token: "",
  },

  getters: {},

  mutations: {},

  actions: {
    async login({ commit }, payload) {
      
      return true;
    },
  },
};

export default authStore;
