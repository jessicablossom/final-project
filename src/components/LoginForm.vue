<template>
  <div class="container-v">
    <div class="banner">
      <img class="hero" src="../assets/hero.jpeg" />
    </div>
    <v-form
      class="login"
      ref="login"
      v-model="valid"
      v-on:submit.prevent="onSubmit"
    >
      <v-container fluid>
        <h2>Login</h2>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          placeholder="user@mail.com"
          required
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          :rules="passwordRules"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          hint="At least 8 characters"
          @click:append="show1 = !show1"
          counter
        />
        <v-btn block @click="validate">Login</v-btn>
        <p>Forgot pasword?</p>
        <p>
          Don't haven an account?
          <router-link to="/register">Create one</router-link>
        </p></v-container
      >
    </v-form>
    <div class="footer">
      <h1>Your favourite frieds any moment any place</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  components: {},
  data() {
    return {
      valid: false,
      show1: false,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    validate() {
      if (this.$refs.login.validate()) {
        let loginForm = {
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch("loginUser", loginForm);
      }
    },
  },
  computed: {
    getUsers() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
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
  width: 100vw;
}
.banner {
  height: 35vw;
  top: 0;
}
.banner img {
  height: 100%;
}

.login {
  width: 40vw;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0 80px 0 80px;
  margin: 20px auto;
  justify-self: start;
  justify-content: space-around;
}
.login h2,
p,
a {
  text-align: center;
}

h2 {
  margin-top: 10px;
}

a {
  font-weight: bold;
  color: var(--main-secondary-color);
}
.input {
  height: 10px;
  margin: 10px !important;
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
