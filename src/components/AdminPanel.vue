<template>
  <v-container class="admin-panel">
    <v-tabs fixed-tabs v-model="tab" center-active color="teal accent-6">
      <v-tab>Orders</v-tab>
      <v-tab>Products Managment</v-tab>
      <v-tab>Users</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item transition="fade-transition"><h1>orders</h1>
      <v-data-table>
        <thead><tr>
          <th>Status</th></tr>
        </thead>
      </v-data-table>
      </v-tab-item>
      <v-tab-item transition="fade-transition">
        <div class="column container">
          <AddProduct />
          <AdminTableProducts :products="getProducts" /></div
      ></v-tab-item>
      <v-tab-item transition="fade-transition">
        <v-container><AdminUsers :users="getUsers" /></v-container
      ></v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import AddProduct from "./AddProduct.vue";
import AdminTableProducts from "./AdminTableProducts.vue";
import AdminUsers from "./AdminUsers.vue";
import axios from "axios";

export default {
  name: "AdminPanel",

  components: {
    AdminUsers,
    AdminTableProducts,
    AddProduct,
  },
  data() {
    return {
      tab: null,
      dialog: false,
      usersHeaders: [
        { text: "Email", value: "email" },
        { text: "UserID", value: "id" },
        { text: "role", value: "adminrole" },
      ],
    };
  },
  methods: {
    deleteProduct(productId) {
      axios
        .delete(
          `https://61b8f28f38f69a0017ce5e38.mockapi.io/products/${productId}`
        )
        .then((data) => {
          console.log(data);
          this.getProducts();
        });
    },
  },
  computed: {
    getProducts() {
      return this.$store.state.products;
    },
    getUsers() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getUsers");
  },
};
</script>

<style Scoped>
.v-tabs-items,
.v-window,
.v-item-group,
.container {
  width: 100vw !important;
}
.v-application .green.lighten-2 {
  background-color: var(--main-secondary-color) !important;
  color: #303030;
  width: 100vw;
}

.v-window__container {
  align-items: center;
  width: 100vw;
}
.admin-panel {
  border: red 1px solid;
  width: 1980px !important;
  display: flex;
  flex-direction: column;
}
.v-main {
  padding-top: 30px !important;
}
.container {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.text-align {
  text-align: start;
  margin: 20px 0 20px 0px;
}
.v-text-field {
  width: 80vw !important;
}
.v-btn {
  background-color: var(--main-secondary-color) !important;
  border: none;
  color: #303030 !important;
  font-size: 16px;
  height: 30px;
  margin: 10px 0;
  cursor: pointer;
}
.v-application .red {
  background-color: var(--light-primary-color) !important;
  color: white !important;
}
.rowProduct {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
}
@media screen and (min-width: 466px) and (max-width: 1279px) {
  .admin-panel {
    flex-direction: column;
    width: 100vw;
    left: 0;
    margin: 0;
  }
  .sidebar-product,
  .sidebar-table {
    min-width: 90%;
    margin: 0 auto 40px auto;
  }
}
@media (min-width: 1264px){
  .container {
    max-width: 96vw !important;
}

