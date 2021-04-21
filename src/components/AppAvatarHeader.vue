<template>
  <q-item class="column q-mx-auto">
    <q-avatar class="q-mx-auto" size="100px">
      <img :src="user.avatar" />
    </q-avatar>
    <q-item-label class="text-center text-h5">
      {{ user.first_name | fullname(user.last_name) }}
    </q-item-label>
  </q-item>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  filters: {
    fullname(firstname, lastname) {
      return firstname + " " + lastname;
    }
  }
};
</script>

<style></style>
