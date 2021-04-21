<template>
  <q-page class="q-pa-sm">
    <q-list>
      <q-item-section class="q-mx-auto">
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
      </q-item-section>
    </q-list>
    <q-separator />
    <app-timeline />
  </q-page>
</template>
<script>
import AppTimeline from "src/components/AppTimeline.vue";
import { mapActions, mapGetters } from "vuex";
import AppCardExperience from "../../components/AppCardExperience.vue";
import AppAvatarHeader from "src/components/AppAvatarHeader.vue";
export default {
  components: { AppCardExperience, AppTimeline, AppAvatarHeader },
  watch: {
    "$route.params.id": {
      handler: function(id) {
        this.fetchUser(id);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    ...mapActions("portfolio", ["fetchUser"])
  },
  computed: {
    ...mapGetters("portfolio", ["getUser"])
  },
  filters: {
    fullname(firstname, lastname) {
      return firstname + " " + lastname;
    }
  }
};
</script>
<style></style>
