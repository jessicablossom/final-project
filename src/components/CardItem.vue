<template>
  <v-card elevation="2" class="card">
    <div fluid><img :src="product.image" /></div>
    <div class="card-content">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <h3>$ {{ product.price }}</h3>
    </div>
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
  justify-content: space-evenly;
  align-items: center;
  border: 0.5px solid #d4d4d4;
  margin: 5px;
  padding: 10px;
}

.card-content {
  height: 100%;
  max-width: 50%;
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
  text-align: justify;
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
  .card img {
    width: 80%;
  }

  .card {
    width: 50vw !important;
    height: 150px;
  }
  .card-content {
    width: 50%;
    padding: 3px;
  }
  .card-content h3 {
    font-size: 13px;
  }
  .card-content p {
    font-size: 11px;
  }
  .v-btn {
    align-self: flex-end;
    margin: 15px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1079px) {
  .card {
    min-width: 45vw;
  }
}
@media screen and (max-width: 767px) {
  .card {
    min-width: 90vw;
  }
}
</style>
