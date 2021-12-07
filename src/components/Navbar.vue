<template>
  <v-app-bar class="navbar" color="var(--light-primary-color)" app dark>
    <img src="../assets/Logo.svg" />
    <ul>
      <li>Home</li>
      <li>Cart</li>
      <li><v-avatar size="40"></v-avatar></li>
    </ul>
  </v-app-bar>
</template>
<script></script>

<style scoped>
.navbar {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: space-between !important;
  left: 0;
  height: 50px;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 1;
}

.v-app-bar ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: end;
  list-style: none;
  margin-right: 10px;
  padding: 5px;
}
.v-app-bar li {
  font-size: 16px;
  margin-right: 15px;
  cursor: pointer;
}
.v-avatar {
  background-color: white;
}
</style>
