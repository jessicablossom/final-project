import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    users: [],
    newUser: [],
    currentUser: [],
    products: [],
    newProduct: [],
    loadingProducts: false,
    orders: [],
    newOrder: [],
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      state.cart.push(payload);
    },
    REMOVE_FROM_CART(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    ADD_USER(state, payload) {
      state.newUser = payload;
    },
    USERS(state, payload) {
      state.users = payload;
    },

    ADD_PRODUCT(state, payload) {
      state.newProduct = payload;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    LOADING_PRODUCTS(state, payload) {
      state.loadingProducts = payload;
    },
    ADD_ORDER(state, payload) {
      state.newOrder = payload;
    },
    ORDERS(state, payload) {
      state.orders = payload;
    },
  },
  actions: {
    addCartProduct({ commit }, payload) {
      commit("ADD_TO_CART", payload);
    },
    removeFromCart({ commit }, id) {
      commit("REMOVE_FROM_CART", id);
    },
    getProducts(context) {
      context.commit("LOADING_PRODUCTS", true);
      axios
        .get("https://61b8f28f38f69a0017ce5e38.mockapi.io/products")
        .then((data) => {
          context.commit("PRODUCTS", data.data);
          context.commit("LOADING_PRODUCTS", false);
        });
    },
    addProducts(context, payload) {
      axios
        .post("https://61b8f28f38f69a0017ce5e38.mockapi.io/products", payload)
        .then((result) => {
          context.commit("ADD_PRODUCT", result.data);
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
          context.commit("ADD_USER", result.data);
          context.dispatch("getUsers");
        });
    },
    addOrder(context, payload) {
      axios
        .post("https://61b8f28f38f69a0017ce5e38.mockapi.io/orders", payload)
        .then((result) => {
          context.commit("ADD_ORDER", result.data);
          context.dispatch("getOrders");
        });
    },
    getOrders(context) {
      axios
        .get("https://61b8f28f38f69a0017ce5e38.mockapi.io/orders")
        .then((data) => {
          context.commit("ORDERS", data.data);
        });
    },
  },
  getters: {
    products: (state) => state.products,
    loadingProducts: (state) => state.loadingProducts,
  },
  modules: {},
});
