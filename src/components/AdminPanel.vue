<template>
  <div class="admin-panel">
    <div class="sidebar-product">
      <v-card class="pa-4">
        <h2>Add New product</h2>
        <v-form>
          <v-text-field
            v-model="newProduct.name"
            :rules="productNameRules"
            label="Product Name"
            required
          />
          <v-textarea
            v-model="newProduct.description"
            label="Product Description"
            rows="1"
            counter="50"
          />
          <v-text-field
            v-model.number="newProduct.price"
            :rules="productPriceRules"
            label="Price"
            prefix="$"
            required
          />
          <v-text-field
            v-model="newProduct.image"
            label="Image File Path"
            placeholder="/assets/icecream-cherry.svg"
          />
          <v-checkbox
            v-model="newProduct.stock"
            :rules="productStockRules"
            label="is product in Stock?"
            required
          />
          <v-btn @click="addProduct" block> Add product</v-btn>
        </v-form>
      </v-card>
    </div>
    <div class="sidebar-table">
      <v-data-table :headers="productsHeaders" :items="products">
        <template v-slot:item.action="{ item }">
          <v-btn @click="deleteProduct(item.id)">Delete</v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      productsHeaders: [
        {
          text: "Product Name",
          value: "name",
        },
        { text: "Description", value: "description" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Actions", value: "action" },
      ],
      newProduct: {
        name: "",
        description: "",
        price: "",
        stock: false,
        image: "",
      },
      productNameRules: [(v) => !!v || "Product Name is required"],
      productPriceRules: [(v) => v > 0 || "Price should be major to 0"],
      productStockRules: [(v) => !!v || "Stock is required"],
    };
  },
  name: "AdminPanel",
  methods: {
    getProducts() {
      fetch("https://61b8f28f38f69a0017ce5e38.mockapi.io/products")
        .then((res) => res.json())
        .then((data) => {
          this.products = data;
        });
    },
    addProduct() {
      const header = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.newProduct),
      };
      fetch("https://61b8f28f38f69a0017ce5e38.mockapi.io/products", header)
        .then((res) => res.json())
        .then((data) => {
          console.log("Created Product:", data);
          this.getProducts();
        });
    },
    deleteProduct(productId) {
      const header = {
        method: "DELETE",
      };
      fetch(
        `https://61b8f28f38f69a0017ce5e38.mockapi.io/products/${productId}`,
        header
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Deleted product:", data);
          this.getProducts();
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
.admin-panel {
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
}
.sidebar-product {
  width: 20vw !important;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  left: 0;
}
.sidebar-table {
  width: 70vw !important;
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
</style>
