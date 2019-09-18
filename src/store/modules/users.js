import router from "../../router";
import { reject } from "q";
const state = {
  user: null
};

const getters = {
  user: state => state.user
};

const actions = {
  async fetchUser({ commit }) {
    const response = await this._vm.$auth.getUser();
    commit("setUser", response);
  },
  async logout({ commit }) {
    await this._vm.$auth.logout();
    const response = await this._vm.$auth.getUser();
    router.push("/").catch(err => {
      reject(err);
    });
    commit("setUser", response);
  }
};

const mutations = {
  setUser: (state, elem) => (state.user = elem)
};

export default {
  state,
  getters,
  actions,
  mutations
};
