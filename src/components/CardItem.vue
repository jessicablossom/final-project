<template>
  <div class="card">
    <div>
      <img :src="item.image" />
    </div>
    <div class="card-content">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <h3>$ {{ item.price }}</h3>
    </div>
    <button class="btn-primary-circle">+</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
};
</script>
<style>
.card {
  height: 130px;
  width: 350px;
  border: 0.5px solid #d4d4d4;
  padding: 10px;
  border-left: 8px solid var(--main-secondary-color);
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.card-content {
  height: 100%;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
}
.card-content h3 {
  margin: 0;
  font-size: 15px;
  font-weight: bold;
}
.card-content p {
  margin: 0;
  font-size: 12px;
}
.btn-primary-circle {
  align-self: flex-start;
  background-color: var(--main-secondary-color);
  border: none;
  border-radius: 25px;
  color: #ffffff;
  font-size: 25px;
  height: 30px;
  margin-top: 10px;
  width: 30px;
  cursor: pointer;
}
.btn-primary:hover {
  background-color: var(--main-secondary-color);
}
.hide {
  display: none;
}
@media screen and (max-width: 1241px) {
  .card {
    width: 40%;
  }
}

@media screen and (max-width: 800px) {
  .card {
    width: 100%;
  }
}
</style>
