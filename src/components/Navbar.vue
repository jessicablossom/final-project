<template>
  <v-app-bar color="var(--light-primary-color)" app dark>
    <div class="navbar">
      <router-link to="/">
        <img src="../assets/Logo.svg" />
      </router-link>
      <ul v-if="loggedUser">
        <li>Hola, {{ loggedUser.email }}</li>
        <li class="logout" @click="logout">Logout</li>
      </ul>
    </div>
  </v-app-bar>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.commit("LOGOUT_USER");
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["loggedUser"]),
  },
};
</script>

<style scoped>
.navbar {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: space-around !important;
  left: 0;
  height: 50px;
  padding: 10px;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100vw;
  z-index: 1;
}

.v-app-bar ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: end;
  list-style: none;
  margin-right: 10px;
  padding: 5px;
}
.v-app-bar a {
  font-weight: 700 !important;
  font-family: "Nunito", sans-serif;
  color: white;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
}
.v-app-bar li {
  margin-left: 20px;
}
.logout {
  cursor: pointer;
  font-weight: bold;
  background-color: white;
  color: #303030;
  padding: 2px 10px;
}
.v-avatar {
  background-color: white;
}
</style>
