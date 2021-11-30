<template>
  <div class="card">
    <div class="cuadrado"></div>
    <div class="card-content">
      <h3>Small cone of fries</h3>
      <p>Small cone of fries with 2 sauces of your choice</p>
      <h3>$ 1,00</h3>
    </div>
    <button class="btn-primary">+</button>
  </div>
</template>

<script></script>
<style>
.card {
  height: 130px;
  width: 350px;
  border: 0.5px solid #d4d4d4;
  padding: 0 10px;
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
.cuadrado {
  height: 100px;
  width: 100px;
  background-color: lightslategray;
}
.card-content {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}
.card-content h3 {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
}
.card-content p {
  margin: 0;
  font-size: 10px;
}
.btn-primary {
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

@media screen and (max-width: 1241px) {
  .card {
    width: 40%;
  }
  .cuadrado {
    height: 70px;
    width: 70px;
  }
}

@media screen and (max-width: 800px) {
  .card {
    width: 100%;
  }
}
</style>
