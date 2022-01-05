<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">Add new Product</v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h6 green lighten-2">
          Add product
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form
            ref="newProduct"
            v-model="valid"
            v-on:submit.prevent="onSubmit"
          >
            <v-text-field
              color="teal"
              v-model="name"
              :rules="productNameRules"
              label="Product Name"
              required
            />
            <v-textarea
              color="teal"
              v-model="description"
              label="Product Description"
              rows="1"
              counter="80"
            />
            <v-text-field
              color="teal"
              v-model.number="price"
              :rules="productPriceRules"
              label="Price"
              prefix="$"
              required
            />
            <v-text-field
              color="teal"
              v-model="image"
              label="Image File Path"
              placeholder="/assets/icecream-cherry.svg"
            />
            <v-checkbox
              color="teal"
              v-model="stock"
              :rules="productStockRules"
              label="is product in Stock?"
            />
            <v-btn class="red" @click="dialog = false"> Cancel </v-btn>
            <v-btn @click="createProduct()"> Add product</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddProduct",
  data() {
    return {
      dialog: false,
      valid: false,
      newProduct: {
        name: "",
        description: "",
        price: "",
        stock: false,
        image: "",
      },
      productNameRules: [(v) => !!v || "Product Name is required"],
      productPriceRules: [(v) => v > 0 || "Price should be major to 0"],
    };
  },
  methods: {
    createProduct() {
      if (this.$refs.newProduct.validate()) {
        let data = {
          name: this.name,
          description: this.description,
          price: this.price,
          stock: this.stock,
          image: this.image,
        };
        this.$store.dispatch("addProducts", data);
        this.$refs.newProduct.reset();
        this.dialog = false;
      }
    },
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
};
</script>

<style></style>
