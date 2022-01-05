<template>
  <v-col class="right-panel">
    <h3>Your Products</h3>
    <v-container class="center" v-if="cart.length > 0">
      <v-data-table disable-sort :headers="cartHeaders" :items="cart">
      </v-data-table>
      <v-btn class="order">Send Order</v-btn>
    </v-container>
    <v-container class="center" v-else>
      <img src="../assets/empty-cart.png" />
      <p>Your cart is empty</p>
    </v-container>
  </v-col>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "cartpanel",
  computed: {
    ...mapState({
      cart: (state) => state.cart,
    }),
  },
  data() {
    return {
      cartHeaders: [
        { text: "Item Name", value: "name" },
        { text: "Quantity ", value: "quantity" },
        { text: "Price ", value: "price" },
        { text: "Total ", value: "total" },
      ],
    };
  },
};
</script>

<style>
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
