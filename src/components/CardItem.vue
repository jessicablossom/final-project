<template>
  <v-card elevation="2" class="d-flex align-center justify-center">
    <img :src="item.image" />
    <div class="card-content">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <h3>$ {{ item.price }}</h3>
    </div>
    <v-btn class="mx-2" fab dark small color="var(--main-secondary-color)">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
};
</script>
<style>
.v-card {
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid #d4d4d4;
  margin: 10px;
  padding: 10px;
  width: 28vw;
}

.card-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 10px;
}
.card-content h3 {
  margin: 0;
  font-size: 15px;
  font-weight: bold;
}
.card-content p {
  text-align: left;
  margin: 0;
  font-size: 12px;
}
.v-btn {
  align-self: flex-start;
  background-color: var(--main-secondary-color);
  border: none;
  color: #ffffff;
  cursor: pointer;
}
.btn-primary:hover {
  background-color: var(--main-secondary-color);
}
.hide {
  display: none;
}
</style>
