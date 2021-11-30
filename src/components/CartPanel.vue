<template>
  <div class="right-panel">
    <h3>Your Products</h3>
    <div class="center">
      <img src="../assets/empty-cart.png" />
      <p>Your cart is empty</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.right-panel {
  border: 0.5px solid #d4d4d4;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  height: 40%;
  margin: 10px;
  padding: 20px;
  width: 30%;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.center img {
  width: 90%;
}
</style>
