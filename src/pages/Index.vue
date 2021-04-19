<template>
  <q-page class="flex">
    <q-list bordered padding class="q-px-sm full-width">
      <app-card v-for="user in getUsers" :key="user.id" :user="user" />
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppCard from "../components/AppCard.vue";
export default {
  components: {
    AppCard
  },
  mounted() {
    // this.fetchUsers();
  },
  computed: {
    ...mapGetters("portfolio", ["getUsers"])
  },
  methods: {
    ...mapActions("portfolio", ["fetchUsers"])
  }
};
</script>
