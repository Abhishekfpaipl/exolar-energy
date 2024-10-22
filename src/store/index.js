import { createStore } from "vuex";
import about from "./about";
import states from "./states";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    about: about,
    states:states
  },
});
