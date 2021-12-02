<template>
  <v-container class="container">
    <v-chip-group class="menu-items" active-class="primary--text">
      <v-chip>Fried Potatoes</v-chip>
      <v-chip>Extra Sauces</v-chip>
      <v-chip>Sodas</v-chip>
      <v-chip>Beers</v-chip>
    </v-chip-group></v-container
  >
</template>

<script>
export default {};
</script>

<style>
.container {
  margin-left: 10px !important;
  margin-top: 20px !important;
}

.v-chip {
  background-color: #d4d4d4 !important;
  font-weight: bold;
  cursor: pointer;
}
.v-chip:hover,
.v-chop:active {
  background-color: var(--main-secondary-color) !important;
  color: white !important;
  transition: ease-in-out 0.2s;
}
</style>
