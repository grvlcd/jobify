<template>
  <q-page class="flex">
    <q-list bordered padding class="q-px-sm full-width">
      <app-card v-for="user in getUsers" :key="user.id" :user="user" />
    </q-list>
  </q-page>
</template>

<script>
import AppCard from "../components/AppCard.vue";
import { mapGetters } from "vuex";
const datas = [
  {
    id: "xqyi231uhfai2ubiq51hqiuh6",
    name: "Christian Alfonso Gonzales",
    experience: {
      skill: "Programmer",
      offer: "Can build you a front to back software solutions"
    },
    ratings: "4",
    rate: 1250
  },
  {
    id: "xqyi231uhfai2ubiq51hqiuh8",
    name: "Christian Alfonso Bernales",
    experience: {
      skill: "Musician",
      offer: "Can create beats/music."
    },
    ratings: "1",
    rate: 500
  },
  {
    id: "xqyi231uhfai2ubiq51hqiuh3",
    name: "Christian Alfonso Bobier",
    experience: {
      skill: "Plumber",
      offer: "Can create/fix plumps"
    },
    ratings: "5",
    rate: 700
  },
  {
    id: "xqyi231uhfai2ubiq51hqiuh1",
    name: "Christian Alfonso Samson",
    experience: {
      skill: "Doctor",
      offer: "Can do doctor things."
    },
    ratings: "2",
    rate: 4000
  }
];
export default {
  name: "PageIndex",
  components: {
    AppCard
  },
  computed: {
    ...mapGetters("portfolio", ["getUsers"])
  },
  mounted() {
    this.$store.dispatch("portfolio/fetchUsers", datas);
  }
};
</script>
