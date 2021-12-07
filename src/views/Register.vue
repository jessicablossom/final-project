<template>
  <div class="register">
    <Navbar />
    <Login />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Login from "../components/Login.vue";

export default {
  name: "Register",
  components: {
    Navbar,
    Login,
  },
};
</script>
<style scoped>
.register {
  height: 100vh;
  width: 100vw;
}
</style>
