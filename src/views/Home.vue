<template>
  <div>
    <MenuItems />
    <h1 id="#fries">Fried Potatoes</h1>
    <div class="content">
      <div class="product-grid">
        <div v-for="(item, i) in items" :key="i">
          <CardItem :item="item" />
        </div>
      </div>
      <CartPanel class="responsive" />
    </div>
  </div>
</template>
<script>
import CardItem from "../components/CardItem.vue";
import CartPanel from "../components/CartPanel.vue";
import MenuItems from "../components/MenuItems.vue";

export default {
  name: "Home",
  props: ["item"],
  components: {
    MenuItems,
    CardItem,
    CartPanel,
  },
  data() {
    return {
      items: [
        {
          name: "Small cone of fries",
          description: "Small cone of fries with 2 sauces of your choice",
          stock: true,
          price: 1.0,
          image: "./assets/small-cone.svg",
        },
        {
          name: "Medium cone of fries",
          description: "Medium cone of fries with 2 sauces of your choice",
          stock: true,
          price: 1.25,
          image: "./assets/medium-cone.svg",
        },
        {
          name: "Big cone of fries",
          description: "Big cone of fries with 2 sauces of your choice",
          stock: true,
          price: 2.0,
          image: "./assets/big-cone.svg",
        },
        {
          name: "Bucket of fries",
          description: "Bucket of fries with 3 sauces of your choice",
          stock: true,
          price: 3.0,
          image: "./assets/bucket-fries.svg",
        },
        {
          name: "Extra single dip sauce",
          description: "Extra single dip sauce of your choice",
          stock: true,
          price: 0.5,
          image: "./assets/single-sauce.svg",
        },
        {
          name: "Extra 3 dip sauces",
          description: "Extra 3 dip sauces of your choice",
          stock: true,
          price: 3,
          image: "./assets/triple-sauces.svg",
        },
        {
          name: "Pepsi can",
          description: "12oz can, options: 7up, pepsi, fanta",
          stock: true,
          price: 0.5,
          image: "./assets/pepsi.svg",
        },
        {
          name: "Pepsi bottle",
          description: "20oz bottle, options: 7up, pepsi, fanta",
          stock: true,
          price: 0.75,
          image: "./assets/pepsi-bottle.svg",
        },
        {
          name: "Beer can",
          description: "12oz beer can, only heineken brand",
          stock: true,
          price: 1.0,
          image: "./assets/beer-can.svg",
        },
        {
          name: "Beer bottle",
          description: "24oz beer bottle, only heineken brand",
          stock: true,
          price: 2,
          image: "./assets/beer-bottle.svg",
        },
      ],
    };
  },
};
</script>
<style scoped>
/* min-width: 1280px*/

.login {
  background-color: lightcoral;
  height: 100vh;
  width: 100vw;
}
.content {
  display: flex;
  justify-content: space-evenly;
}
.product-grid {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 60%;
}

@media screen and (min-width: 768px) and (max-width: 1079px) {
  .content {
    flex-direction: row;
    margin: 0 20px 0 20px;
    justify-content: space-around !important;
  }

  .product-grid {
    flex-direction: column;
    width: 50%;
  }
  .responsive {
    width: 40%;
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
