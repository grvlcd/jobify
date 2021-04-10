<template>
  <q-card class="my-card q-mb-sm" flat bordered>
    <q-item clickable :to="`/profile/${user.id}`">
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{user.name}}</q-item-label>
        <q-item-label caption>
          <q-rating
            size="18px"
            readonly
            v-model="stars"
            :max="5"
            color="primary"
          />
        </q-item-label>
      </q-item-section>
      <q-space />
      <q-item-section avatar class="flex flex-center">
        <q-icon color="primary" name="navigate_next" />
      </q-item-section>
    </q-item>
    <q-separator />
    <q-card-section horizontal>
      <q-list>
        <app-card-experience :experience="user.experience" />
      </q-list>
    </q-card-section>
    <q-separator />
    <q-card-section class="q-pa-xs q-px-md flex">
      <q-icon size="sm" color="red" name="favorite_outline"></q-icon>
      <q-space />
      <q-icon size="sm" color="green" name="attach_money" />
      <q-item-label class="text-h6">{{user.rate}}</q-item-label>
    </q-card-section>
  </q-card>
</template>

<script>
import AppCardExperience from "./AppCardExperience.vue";
export default {
  components: { AppCardExperience },
  props: {
    user: {
      type: [Object, Array],
      required: true
    }
  },
  data() {
    return {
      stars: parseInt(this.user.ratings)
    };
  }
};
</script>

<style></style>
