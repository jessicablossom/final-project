import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import router from './router'
import store from './store'

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
