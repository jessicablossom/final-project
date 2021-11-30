<template>
  <div id="app">
    <Navbar />
    <h1>Products</h1>
    <MenuItems />
    <div class="content">
      <div class="product-grid">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
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

export default {
  name: "App",
  components: {
    CardItem,
    CartPanel,
    MenuItems,
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
@import "./styles.css";

body {
  margin: 20px;
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
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
}
</style>
