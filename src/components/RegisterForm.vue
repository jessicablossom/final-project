<template>
  <div class="container-v">
    <div class="banner">
      <img class="hero" src="../assets/hero.jpeg" />
    </div>
    <v-form
      class="register"
      ref="register"
      v-model="valid"
      v-on:submit.prevent="onSubmit"
    >
      <v-container fluid>
        <h2>Create Account</h2>
        <v-text-field
          color="teal"
          v-model="email"
          :rules="emailRules"
          label="Email"
        />
        <v-text-field
          color="teal"
          v-model="confirmEmail"
          :rules="confirmEmailRules"
          label="Confirm Email"
        />
        <v-text-field
          color="teal"
          label="Password"
          v-model="password"
          :rules="passwordRules"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        />
        <v-text-field
          color="teal"
          label="Confirm Password"
          v-model="confirmPassword"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="confirmPasswordRules"
          :type="show2 ? 'text' : 'password'"
          @click:append="show2 = !show2"
          hint="At least 8 characters"
          counter
        />
        <v-btn block @click="createAccount()">Create Account</v-btn>
        <p>
          Already have an account?
          <router-link to="/login">Login here</router-link>
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
  name: "RegisterForm",
  data() {
    return {
      valid: false,
      newUser: {
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
      },
      show1: false,
      show2: false,
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      confirmEmailRules: [
        (v) => !!v || "Confirmation is required",
        (v) => v == this.email || "Email does not match",
      ],
      passwordRules: [
        (v) => !!v || "Confirmation is required",
        (v) => v.length >= 8 || "Password at least 8 characters",
      ],
      confirmPasswordRules: [
        (v) => !!v || "Confirmation is required",
        (v) => v == this.password || "Password does not match",
      ],
    };
  },
  methods: {
    createAccount() {
      if (this.$refs.register.validate()) {
        const registerForm = {
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch("addUser", registerForm).then(() => {
          this.$router.push("/home");
        });
        this.$refs.register.reset();
      }
    },
  },
};
</script>

<style>
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

.register {
  width: 40vw;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0 80px 0 80px;
  margin: 20px auto;
  justify-self: start;
  justify-content: center;
}
.register h2,
.register p,
.register router-link {
  text-align: center;
}

.v-application a {
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
