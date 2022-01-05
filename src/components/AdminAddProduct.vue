<template>
  <div>
    <v-form ref="newProduct" v-model="valid" v-on:submit.prevent="onSubmit">
      <v-text-field
        v-model="name"
        :rules="productNameRules"
        label="Product Name"
        required
      />
      <v-textarea
        v-model="description"
        label="Product Description"
        rows="1"
        counter="50"
      />
      <v-text-field
        v-model.number="price"
        :rules="productPriceRules"
        label="Price"
        prefix="$"
        required
      />
      <v-text-field
        v-model="image"
        label="Image File Path"
        placeholder="/assets/icecream-cherry.svg"
      />
      <v-checkbox
        v-model="stock"
        :rules="productStockRules"
        label="is product in Stock?"
      />
      <v-btn class="red" @click="close()"> Cancel </v-btn>
      <v-btn @click="validate()"> Add product</v-btn>
    </v-form>
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
    validate() {
      if (this.$refs.newProduct.validate()) {
        let newProductForm = {
          name: this.name,
          description: this.description,
          price: this.price,
          stock: this.stock,
          image: this.image,
        };
        this.$store.dispatch("addProducts", newProductForm);
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
