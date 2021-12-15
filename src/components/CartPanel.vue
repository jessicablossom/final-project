<template>
  <v-col class="right-panel">
    <h3>Your Products</h3>
    <div class="center">
      <img src="../assets/empty-cart.png" />
      <p>Your cart is empty</p>
    </div>
  </v-col>
</template>

<script>
export default {};
</script>

<style>
.right-panel {
  width: 37vw;
  border: 0.5px solid #d4d4d4;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.center img {
  width: 70%;
}

@media screen and (min-width: 1080px) and (max-width: 1279px) {
  .right-panel {
    width: 30vw;
  }
}
</style>
