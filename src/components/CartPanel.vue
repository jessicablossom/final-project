<template>
  <v-card elevation="2" class="right-panel">
    <div class="center" v-if="cart.length > 0">
      <h3>Your Orders</h3>

      <v-data-table
        transition="fade-transition"
        disable-sort
        :headers="cartHeaders"
        :items="cart"
      >
        <template v-slot:item.action="{ item }">
          <v-btn class="actions" icon @click="deleteProduct(item.id)">x</v-btn>
        </template>
      </v-data-table>
      <h3 class="left">Total: $ {{ totalCart }}</h3>

      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="sendOrder" class="order" v-bind="attrs" v-on="on"
            >Send Order</v-btn
          >
        </template>
        <v-card v-if="loggedUser">
          <v-card-title class="text-h6 green lighten-2"> Order </v-card-title>
          <v-card-text
            ><div class="flex-inline">
              <p>Your order</p>
              <h2 class="subtitle"># {{ newOrder.id }}</h2>
              <p>was created successfully!</p>
            </div>

            <v-btn class="btn" @click="dialog = false"> Ok </v-btn></v-card-text
          >
        </v-card>
        <v-card v-else>
          <v-card-title class="text-h6 green lighten-2"> Login </v-card-title>
          <v-card-text
            ><div class="flex-inline">
              <p>You need to login to create your order</p>
            </div>
            <v-btn class="btn" @click="orderLogin()">
              Login
            </v-btn></v-card-text
          >
        </v-card>
      </v-dialog>
    </div>
    <div class="center" v-else>
      <img transition="fade-transition" src="../assets/empty-cart.png" />
      <p>Your cart is empty</p>
    </div>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "cartpanel",
  computed: {
    ...mapState({
      cart: (state) => state.cart,
    }),
    ...mapGetters(["totalCart", "newOrder", "loggedUser"]),
  },
  data() {
    return {
      dialog: false,
      cartHeaders: [
        { text: "Item Name", value: "name" },
        { text: "Quantity ", value: "quantity" },
        { text: "Price ", value: "price" },
        { text: "Total ", value: "total" },
        { text: "Actions", value: "action" },
      ],
    };
  },
  methods: {
    deleteProduct(id) {
      this.$store.dispatch("removeFromCart", id);
    },
    sendOrder() {
      this.$store.dispatch("sendOrder");
    },
    orderLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style Scoped>
.v-application .green.lighten-2 {
  background-color: var(--main-secondary-color) !important;
}
.flex-inline {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
h2,
p {
  margin: 0px 5px !important;
}

.left {
  align-self: flex-start;
}
.order {
  background-color: var(--main-secondary-color) !important;
  border: none;
  color: #303030 !important;
  font-size: 16px;
  height: 30px;
  margin: 10px 0;
  cursor: pointer;
  align-self: fcenter;
}
.right-panel {
  width: 40vw;
  border: 0.5px solid #d4d4d4;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.center img {
  width: 70%;
}
@media screen and (min-width: 768px) and (max-width: 1079px) {
  .right-panel {
    min-width: 45vw;
    padding: 10px;
    margin: 20px 10px;
  }
}
@media screen and (max-width: 767px) {
  .right-panel {
    min-width: 90vw;
  }
}
</style>
