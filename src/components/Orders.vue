<template>
  <div>
    <v-data-table :headers="ordersHeaders" :items="orders">
      <template v-slot:item.status="{ item }">
        <div class="row">
          <td v-if="item.status">Approved</td>
          <td v-else>Pending</td>
          <input class="primary" type="checkbox" v-model="item.status" />
        </div>
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn class="actions" icon @click="deleteOrder(item.id)"
          ><Icon icon="mdi:trash-can" />
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  name: "Orders",
  props: {
    orders: Array,
  },
  components: { Icon },
  data() {
    return {
      ordersHeaders: [
        { text: "OrderID", value: "id" },
        { text: "Username", value: "username" },
        { text: "Products", value: "products" },
        { text: "Price", value: "total" },
        { text: "Status", value: "status" },
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
