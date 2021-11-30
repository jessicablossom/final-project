<template>
  <div class="menu-items">
    <ul>
      <li>Potatoe Fries</li>
      <li>Extras Sauces</li>
      <li>Sodas</li>
      <li>Beers</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.menu-items {
  background-color: white;
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
}
.menu-items ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.menu-items ul li {
  background-color: #d4d4d4d4;
  border-radius: 15px;
  margin-right: 15px;
  padding: 5px 15px;
  font-weight: bold;
  cursor: pointer;
}
.menu-items ul li:hover {
  background-color: var(--main-secondary-color);
  color: white;
  transition: ease-in-out 0.2s;
}
</style>
