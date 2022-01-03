import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    newUser: [],
  },
  mutations: {
    ADDUSER(state, payload) {
      state.newUser = payload;
    },
    USERS(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    getUsers(context) {
      axios
        .get("https://61b8f28f38f69a0017ce5e38.mockapi.io/users")
        .then((data) => {
          context.commit("USERS", data.data);
        });
    },
    addUser(context, payload) {
      axios
        .post("https://61b8f28f38f69a0017ce5e38.mockapi.io/users", payload)
        .then((result) => {
          context.commit("ADDUSERS", result.data);
          context.dispatch("getUsers");
        });
    },
  },
  modules: {},
});
