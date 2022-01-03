<template>
  <v-container>
    <v-data-table :headers="usersHeaders" :items="users" item-key="">
      <template v-slot:item.adminrole="{ item }">
        <div class="row">
          <td v-if="item.adminrole">Admin</td>
          <td v-else>User</td>
          <input class="primary" type="checkbox" v-model="item.adminrole" />
        </div>
      </template>
      <template v-slot:item.action="{ user }">
        <v-btn class="actions" icon @click="deleteUser(user.id)"
          ><Icon icon="mdi:trash-can" />
        </v-btn>
        <v-btn class="actions" icon @click="editUser(user.id)"
          ><Icon icon="ant-design:edit-filled" />
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  name: "AdminUsers",
  components: { Icon },
  props: {
    users: Array,
  },
  data() {
    return {
      usersHeaders: [
        { text: "UserID", value: "id" },
        { text: "Email", value: "email" },
        { text: "Admin", value: "adminrole" },
        { text: "Actions", value: "action" },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style Scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row !important;
  width: 80px;
}
</style>
