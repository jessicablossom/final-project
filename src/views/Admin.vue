<template>
  <v-main>
    <Banner />
    <h1 class="text-align">Admin Panel</h1>
    <AdminPanel></AdminPanel>
  </v-main>
</template>

<script>
import AdminPanel from "../components/AdminPanel.vue";
import Banner from "../components/Banner.vue";

export default {
  name: "Admin",
  components: { AdminPanel, Banner },
};
</script>
<style scoped>
.banner {
  margin-top: -64px;
  opacity: 80%;
}
.text-align {
  margin: 20px;
  text-align: center;
}
</style>
