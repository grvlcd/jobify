<template>
  <q-item>
    <q-item-section>
      <q-item-label overline>Primary Skill</q-item-label>
      <q-item-label>{{experience.skill}}</q-item-label>
      <q-item-label class="text-subtitle1"
        >{{experience.offer}}</q-item-label
      >
    </q-item-section>
  </q-item>
</template>
<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true
    }
  }
};
</script>
