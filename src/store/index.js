import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    users: [],
    currentUser: undefined,
    newUser: [],
    products: [],
    newProduct: [],
    loadingProducts: false,
    orders: [],
    newOrder: [],
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      if (state.cart.find((item) => item.id == payload.id)) {
        state.cart = state.cart.map((item) => {
          if (item.id == payload.id) {
            const quantity = item.quantity + 1;
            const total = item.price * quantity;
            return { ...item, quantity, total };
          } else {
            return item;
          }
        });
      } else {
        state.cart.push({ ...payload, quantity: 1, total: payload.price });
      }
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
    LOGIN_USER(state, user) {
      state.currentUser = user;
    },
    LOGOUT_USER(state) {
      state.currentUser = undefined;
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
    loginUser(context, payload) {
      axios
        .get(
          `https://61b8f28f38f69a0017ce5e38.mockapi.io/users?email=${payload.email}`
        )
        .then((response) => {
          const users = response.data;
          if (users.length == 1 && users[0].password == payload.password) {
            context.commit("LOGIN_USER", users[0]);
          } else {
            return Promise.reject("Invalid User");
          }
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
    sendOrder(context) {
      const order = {
        email: this.state.currentUser.email,
        products: this.state.cart,
        total: this.getters.totalCart,
      };
      axios
        .post("https://61b8f28f38f69a0017ce5e38.mockapi.io/orders", order)
        .then((result) => {
          console.log(result);
          context.commit("ADD_ORDER", result.data);
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
    loggedUser: (state) => state.currentUser,
    totalCart: (state) => state.cart.reduce((acc, el) => (acc += el.total), 0),
  },
  modules: {},
});
