<template>
  <q-page class="q-pa-sm">
    <app-avatar-header :user="getUser" />
    <q-separator />
    <div class="q-mx-auto text-justify text-center q-mt-sm">
      <q-item-label>
        {{ getUser.about }}
      </q-item-label>
    </div>
    <app-card-experience
      :professional_background="getUser.professional_background"
      :styles="false"
    />
    <q-separator />
    <app-timeline />
  </q-page>
</template>
<script>
import AppAvatarHeader from "src/components/AppAvatarHeader.vue";
import { mapActions, mapGetters } from "vuex";
import AppTimeline from "../components/AppTimeline.vue";
import AppCardExperience from "src/components/AppCardExperience.vue";
export default {
  components: { AppAvatarHeader, AppTimeline, AppCardExperience },
  mounted() {
    this.fetchUser(2000001);
  },
  computed: {
    ...mapGetters("portfolio", ["getUser"])
  },
  methods: {
    ...mapActions("portfolio", ["fetchUser"])
  }
};
</script>
<style></style>
