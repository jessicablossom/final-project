<template>
  <nav class="navbar">
    <img src="../assets/Logo.svg" />
    <ul>
      <li>Home</li>
      <li><font-awesome-icon :icon="['fas', 'user-secret']" />Cart</li>
      <li>User</li>
    </ul>
  </nav>
</template>

<script></script>

<style scoped>
ul {
  padding: 5px;
  margin-right: 10px;
  list-style: none;
  display: flex;
  flex-direction: row;
}
li {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  margin-right: 15px;
  cursor: pointer;
}
.navbar {
  background-color: var(--light-primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 0;
  height: 35px;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
