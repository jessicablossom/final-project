import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    newUser: [],
    currentUser: [],
    products: [],
    newProduct: [],
  },
  mutations: {
    USERS(state, payload) {
      state.users = payload;
    },
    ADDUSER(state, payload) {
      state.newUser = payload;
    },
    ADDPRODUCT(state, payload) {
      state.newProduct = payload;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    getProducts(context) {
      axios
        .get("https://61b8f28f38f69a0017ce5e38.mockapi.io/products")
        .then((data) => {
          context.commit("PRODUCTS", data.data);
        });
    },
    addProducts(context, payload) {
      axios
        .post("https://61b8f28f38f69a0017ce5e38.mockapi.io/products", payload)
        .then((result) => {
          context.commit("ADDPRODUCT", result.data);
          context.dispatch("getProducts");
        });
    },
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
          context.commit("ADDUSER", result.data);
          context.dispatch("getUsers");
        });
    },
  },
  modules: {},
});
