<template>
  <v-container>
    <h1 class="text-align">Admin Panel</h1>
    <AdminPanel />
  </v-container>
</template>

<script>
import AdminPanel from "../components/AdminPanel.vue";
export default {
  name: "Admin",
  components: { AdminPanel },
};
</script>
<style scoped>
.text-align {
  text-align: center;
}
</style>
