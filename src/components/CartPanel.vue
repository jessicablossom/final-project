<template>
  <v-col class="right-panel">
    <div class="center" v-if="cart.length > 0">
      <h3>Your Cart</h3>

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
      <v-btn @click="sendOrder" class="order">Send Order</v-btn>
    </div>
    <div class="center" v-else>
      <img transition="fade-transition" src="../assets/empty-cart.png" />
      <p>Your cart is empty</p>
    </div>
  </v-col>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "cartpanel",
  computed: {
    ...mapState({
      cart: (state) => state.cart,
    }),
    ...mapGetters(["totalCart"]),
  },
  data() {
    return {
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
  },
};
</script>

<style Scoped>
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
  width: 37vw;
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

@media screen and (min-width: 1080px) and (max-width: 1279px) {
  .right-panel {
    width: 30vw;
  }
}
</style>
