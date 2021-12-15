<template>
  <div class="container-v">
    <div class="banner">
      <img class="hero" src="../assets/hero.jpeg" />
    </div>
    <form class="login">
      <h2>Login</h2>
      <span>Email</span>
      <input name="email" type="email" />
      <span>Password</span>
      <input name="password" type="password" />
      <v-btn block>Login</v-btn>
      <p>Forgot pasword?</p>
      <p>Don't haven an account? <a href="">Create one here</a></p>
    </form>
    <div class="footer">
      <h1>Your favourite frieds any moment any place</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style>
/* media screen and (min-1280px) */

.container-v {
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 80%;
  width: 100vw;
}
.banner {
  height: 70vh;
  top: 0;
}
.banner img {
  height: 100%;
}
.login {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0 80px 0 80px;
  width: 25%;
  margin: 20px auto;
  justify-self: start;
}
h2 {
  margin-top: 10px;
}
.login h2,
p,
a {
  text-align: center;
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
.v-btn {
  background-color: var(--main-secondary-color) !important;
  border: none;
  color: #303030 !important;
  font-size: 16px;
  height: 30px;
  margin: 10px 0;
  cursor: pointer;
}
.footer {
  position: relative;
  display: flex;
  align-items: start;
  justify-content: center;
  background-color: var(--main-primary-color);
  color: white;
  height: 40vh;
  width: 100%;
}
.footer h1 {
  width: 40%;
  font-size: 35px;
  font-weight: 800;
  margin-top: 50px;
}

@media screen and (min-width: 1080px) and (max-width: 1279px) {
  .banner {
    height: 45vh;
  }
  .banner img {
    height: 110%;
  }
  .login {
    margin-top: 30px;
    width: 35%;
    height: 45vh;
  }
  .footer {
    height: 40vh;
    margin-top: -20px;
  }
  .v-btn {
    flex: 0 0 auto;
  }
}

@media screen and (max-width: 1079px) {
  .container-v {
    height: 100vh;
  }
  .login {
    margin-top: 30px;
    width: 100vw;
    height: 40vh;
  }
  .v-btn {
    flex: 0 0 auto;
    margin-bottom: 50px;
  }
  .hero {
    display: none;
  }
  .footer {
    height: 50vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: -50px;
  }
  .footer h1 {
    width: 80%;
    font-size: 25px;
    font-weight: 800;
    margin-top: 30px;
  }
}
</style>
