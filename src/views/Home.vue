<template>
  <div>
    <h1>Products</h1>
    <div class="content">
      <div class="product-grid">
        <v-col cols="6" v-for="product in products" :key="product.id">
          <CardItem :product="product" />
        </v-col>
      </div>
      <div><CartPanel class="responsive" /></div>
    </div>
  </div>
</template>
<script>
import CardItem from "../components/CardItem.vue";
import CartPanel from "../components/CartPanel.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    CardItem,
    CartPanel,
  },
  computed: {
    ...mapGetters(["products"]),
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
<style scoped>
/* min-width: 1280px*/

.content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-right: 0 !important;
  margin-left: 0 !important;
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
    flex-direction: column;
    width: 60vw;
  }
}

@media screen and (min-width: 768px) and (max-width: 1079px) {
  .content {
    flex-direction: row;
    margin: 0 20px 0 20px;
    justify-content: space-around !important;
    width: 100vw;
    margin-left: -50px !important;
  }

  .product-grid {
    flex-direction: column;
    width: 50%;
  }
}
@media screen and (max-width: 767px) {
  .content {
    flex-direction: column;
  }
  .product-grid {
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .responsive {
    margin: auto;
    width: 90vw;
  }
}
</style>
