import Vuex from "vuex";
import Vue from "vue";
import dogs from "./modules/dogs";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dogs
  }
});
