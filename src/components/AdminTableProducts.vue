<template>
  <div class="sidebar-table">
    <v-data-table :headers="productsHeaders" :items="products">
      <template v-slot:item.action="{ item }">
        <v-btn class="actions" icon @click="deleteProduct(item.id)"
          ><Icon icon="mdi:trash-can" />
        </v-btn>
        <v-btn class="actions" icon @click="editProduct(item.id)"
          ><Icon icon="ant-design:edit-filled" />
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  name: "AdminTableProducts",
  props: {
    products: Array,
  },
  components: { Icon },
  data() {
    return {
      productsHeaders: [
        { text: "Item Name", value: "name" },
        { text: "Description", value: "description" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Actions", value: "action" },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
.actions {
  margin: 4px !important;
  background-color: #c1f1d3 !important;
  transition: 0.5s;
}
.actions:hover {
  background-color: var(--main-secondary-color) !important;
}
</style>
