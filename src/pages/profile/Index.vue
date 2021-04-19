<template>
  <q-page class="q-pa-sm">
    <q-list>
      <q-item-section class="q-mx-auto">
        <q-item class="column q-mx-auto">
          <q-avatar class="q-mx-auto" size="100px">
            <img :src="getUser.avatar" />
          </q-avatar>
          <q-item-label class="text-center text-h5">
            {{ getUser.first_name | fullname(getUser.last_name) }}
          </q-item-label>
        </q-item>
        <q-separator />
        <div
          class="q-mx-auto text-justify text-center q-mt-sm"
        >
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
export default {
  components: { AppCardExperience, AppTimeline },
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
