<template>
  <div>
    <v-data-table :headers="ordersHeaders" :items="orders"> </v-data-table>
  </div>
</template>

<script>
export default {
  name: "Orders",
  props: {
    orders: Array,
  },
  data() {
    return {
      ordersHeaders: [
        { text: "OrderID", value: "id" },
        { text: "Price", value: "total" },
        { text: "Products", value: "products" },
        { text: "Actions", value: "action" },
      ],
    };
  },

  mounted() {
    this.$store.dispatch("getOrders");
  },
};
</script>

<style>
.v-data-footer {
  display: flex;
  flex-wrap: wrap !important;
}
.v-data-footer__select,
.v-data-footer__pagination {
  margin: 0px 15px !important;
  display: flex;
  justify-content: flex-start !important;
}
</style>
