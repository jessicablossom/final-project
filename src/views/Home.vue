<template>
  <v-main>
    <Banner />
    <h1>Products</h1>
    <div v-if="loadingProducts">
      <v-progress-circular
        class="center"
        indeterminate
        size="50"
        color="teal"
      ></v-progress-circular>
    </div>
    <v-container v-else class="content">
      <div class="product-grid">
        <v-col cols="6" v-for="product in products" :key="product.id">
          <CardItem :product="product" />
        </v-col>
      </div>
      <div><CartPanel class="responsive" /></div>
    </v-container>
  </v-main>
</template>
<script>
import CardItem from "../components/CardItem.vue";
import CartPanel from "../components/CartPanel.vue";
import { mapGetters } from "vuex";
import Banner from "../components/Banner.vue";

export default {
  name: "Home",
  components: {
    CardItem,
    CartPanel,
    Banner,
  },
  computed: {
    ...mapGetters(["products", "loadingProducts", "loggedUser"]),
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
<style scoped>
/* min-width: 1280px*/
.v-main {
  padding: 0 !important;
}
.banner {
  margin-top: -64px;
}
.v-progress-circular {
  margin: auto;
}
.center {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}

.product-grid {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 60%;
}
@media screen and (min-width: 1080px) and (max-width: 1279px) {
  .content {
    flex-direction: row;
    width: 100vw;
  }
  .product-grid {
    flex-direction: row;
    width: 60vw;
  }
}

@media screen and (min-width: 768px) and (max-width: 1079px) {
  .content {
    justify-content: space-around;
  }
  .product-grid {
    flex-direction: column;
  }
}
@media screen and (max-width: 767px) {
  .content {
    flex-direction: column;
  }
  .product-grid {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
}
</style>
