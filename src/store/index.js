import Vue from "vue";
import Vuex from "vuex";
import gif from "./modules/gif";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gif
  }
});
