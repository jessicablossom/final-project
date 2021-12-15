<template>
  <div class="row">
    <div class="banner">
      <img src="../assets/hero.jpeg" />
    </div>
    <form class="register">
      <h2>Create Account</h2>
      <span>Email</span>
      <input name="email" type="email" />
      <span>Repeat your Email</span>
      <input name="email" type="email" />
      <span>Password</span>
      <input name="password" type="password" />
      <span>Repeat your Password</span>
      <input name="password" type="password" />
      <v-btn block>Create Account</v-btn>
      <p>Already have an account? <a href="">Login here now</a></p>
    </form>
    <div class="footer">
      <h1>Your favourite frieds any moment any place</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
};
</script>

<style>
.banner {
  width: 60%;
  margin-top: -10px;
}
.banner img {
  width: 100%;
}
.register {
  display: flex;
  flex-direction: column;
  padding: 0 80px 0 80px;
  width: 25%;
  margin: 0 auto;
  justify-self: start;
}
h2 {
  margin-top: 10px;
}
.register h2,
p,
a {
  text-align: center;
}
a {
  font-weight: bold;
  color: var(--main-secondary-color);
}
.register input {
  height: 25px;
  border: 1px #d4d4d4 solid;
  margin: 10px 0;
}
.login input:focus {
  outline: none;
}
.v-btn {
  background-color: var(--main-secondary-color) !important;
  border: none;
  color: #ffffff !important;
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
  background-color: var(--main-primary-color);
  color: white;
  height: 155px;
  width: 100%;
  margin-top: -6px;
}
.footer h1 {
  width: 40%;
  font-size: 35px;
  font-weight: 800;
  text-align: center;
  margin: auto;
  margin-top: 10px;
}
@media screen and (max-width: 1066px) {
  .register {
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
