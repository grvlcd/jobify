<template>
  <q-card class="q-mb-sm" flat bordered>
    <q-item clickable :to="`profile/${user.id}`">
      <q-item-section avatar>
        <q-avatar>
          <img :src="user.avatar" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{
          user.first_name | fullname(user.last_name)
        }}</q-item-label>
        <q-item-label class="text-grey-8 ellipsis-2-lines">
          {{ user.about }}
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-separator />
    <app-card-experience
      :professional_background="user.professional_background"
      :school_length="user.professional_background.educations.length"
      :work_length="user.professional_background.work_experiences.length"
      :about="user.about"
      :work="user.professional_background.work_experiences[0]"
      :education="user.professional_background.educations[0]"
      :styles="false"
    />
    <q-separator />
    <q-item clickable dense>
      <div class="q-my-auto full-width row inline justify-between">
        <q-rating
          readonly
          :value="user.ratings"
          icon="star_border"
          icon-selected="star"
          icon-half="star_half"
          size="1.1rem"
          max="5"
        ></q-rating>
        <q-item-label size="xl">
          {{ user.recommendations }} Recommendations
        </q-item-label>
      </div>
    </q-item>
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
  filters: {
    fullname(firstname, lastname) {
      return firstname + " " + lastname;
    }
  }
};
</script>

<style scoped>
#recommendations {
  font-size: 0.9rem;
}
</style>
