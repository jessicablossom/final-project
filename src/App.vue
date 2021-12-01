<template>
  <div id="app">
    <Navbar />
    <Login />
    <MenuItems />
    <h1 id="#fries">Potatoes Fries</h1>
    <div class="content">
      <div class="product-grid">
        <div v-for="(item, i) in items" :key="i">
          <CardItem :item="item" />
        </div>
      </div>
      <CartPanel />
    </div>
  </div>
</template>

<script>
import CardItem from "./components/CardItem.vue";
import CartPanel from "./components/CartPanel.vue";
import MenuItems from "./components/MenuItems.vue";
import Navbar from "./components/Navbar.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    CardItem,
    CartPanel,
    MenuItems,
    Navbar,
    Login,
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
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import "./styles.css";
body {
  margin: 0;
}

h1 {
  text-align: left;
  margin-left: 50px;
}
.content {
  display: flex;
}

.product-grid {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 60%;
}
</style>
