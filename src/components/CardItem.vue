<template>
  <v-card elevation="2" class="card">
    <v-row>
      <v-col cols="4"><img :src="product.image" /></v-col>
      <v-col cols="6" class="card-content"
        ><h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <h3>$ {{ product.price }}</h3>
      </v-col>
      <v-btn
        @click="addCartProduct(product)"
        class="mx-2"
        fab
        dark
        small
        color="var(--main-secondary-color)"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Card",
  props: ["product"],
  methods: {
    addCartProduct(product) {
      this.$store.dispatch("addCartProduct", product);
    },
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart,
    }),
  },
};
</script>
<style>
/* media screen and (min-1280px) */

.card {
  display: flex !important;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 0.5px solid #d4d4d4;
  margin: 5px;
  padding: 10px;
}

.card-content {
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 10px;
}
.card-content h3 {
  margin: 0;
  font-size: 15px;
  font-weight: bold;
}
.card-content p {
  text-align: left;
  margin: 0;
  font-size: 12px;
}
.mx-2 {
  align-self: flex-start;
  background-color: var(--main-secondary-color);
  border: none;
  color: #303030 !important;
  cursor: pointer;
  margin-top: 5px;
}
.btn-primary:hover {
  background-color: var(--main-secondary-color);
}
.hide {
  display: none;
}

@media screen and (min-width: 1080px) and (max-width: 1279px) {
  .card {
    width: 50vw !important;
  }
  .v-btn {
    align-self: flex-end;
  }
}

@media screen and (min-width: 768px) and (max-width: 1079px) {
  .card {
    width: 100% !important;
  }
}
@media screen and (max-width: 767px) {
  .card {
    min-width: 90vw;
  }
}
</style>
