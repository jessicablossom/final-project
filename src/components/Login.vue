<template>
  <div class="row">
    <div class="hero">
      <img src="../assets/hero.jpeg" />
    </div>
    <form class="login">
      <h2>SIGN IN</h2>
      <span>Email</span>
      <input />
      <span>Password</span>
      <input />
      <button class="btn-primary">Login</button>
      <p>Forgot pasword?</p>
      <p>Don't haven an account <a href="">Create one now</a></p>
    </form>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hero {
  width: 60%;
  margin-top: -10px;
}
.hero img {
  width: 100%;
}
.login {
  display: flex;
  flex-direction: column;
  padding: 0 80px 0 80px;
  width: 25%;
}
.login h2,
p,
a {
  align-self: center;
}
a {
  font-weight: bold;
  color: var(--main-secondary-color);
}
.login input {
  height: 25px;
  border: 1px #d4d4d4 solid;
  margin: 10px 0;
}
.login input:focus {
  outline: none;
}
.btn-primary {
  background-color: var(--main-secondary-color);
  border: none;
  color: #ffffff;
  font-size: 16px;
  height: 30px;
  margin: 10px 0;
  cursor: pointer;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}
.footer {
  background-color: var(--light-primary-color);
  height: 150px;
  width: 100%;
  margin-top: -6px;
}
@media screen and (max-width: 1066px) {
  .login {
    width: 100vw;
  }
  .btn-primary {
    margin-bottom: 50px;
  }
  .hero {
    display: none;
  }
}
</style>
