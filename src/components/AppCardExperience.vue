<template>
  <q-card-section horizontal>
    <q-card-section class="col text-caption">
      <q-list :class="styles ? 'text-body2' : ''" class="row">
        <div class="col">
          <q-item-section top thumbnail>
            <q-btn dense round flat icon="work">
              <q-badge
                color="blue"
                floating
                rounded
                transparent
                v-if="work_length - 1"
              >
                {{ work_length - 1 }}
              </q-badge>
            </q-btn>
          </q-item-section>
        </div>
        <div class="col-11" v-if="work">
          <q-item class="q-pt-none">
            <q-item-section>
              <q-item-label>{{ work.company }}</q-item-label>
              <q-item-label>{{ work.position }}</q-item-label>
              <q-item-label caption>{{
                work.from + " - " + work.to
              }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="col-11" v-else>
          <div class="items-center">
            <div
            class="q-ml-md q-mt-sm"
              v-for="work in professional_background.work_experiences"
              :key="work.id"
            >
              <q-item-label>{{ work.company }}</q-item-label>
              <q-item-label>{{ work.position }}</q-item-label>
              <q-item-label caption>{{
                work.from + " - " + work.to
              }}</q-item-label>
            </div>
          </div>
        </div>
      </q-list>
      <q-list :class="styles ? 'text-body2' : ''" class="row">
        <div class="col">
          <q-item-section top thumbnail>
            <q-btn dense round flat icon="school">
              <q-badge
                color="blue"
                floating
                rounded
                transparent
                v-if="school_length - 1"
              >
                {{ school_length - 1 }}
              </q-badge>
            </q-btn>
          </q-item-section>
        </div>
        <div class="col-11" v-if="education">
          <q-item class="q-pt-none">
            <q-item-section>
              <q-item-label>{{ education.school }}</q-item-label>
              <q-item-label>{{ education.course }}</q-item-label>
              <q-item-label caption>{{
                education.from + " - " + education.to
              }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="col-11" v-else>
          <div class="items-center">
            <div
              v-for="education in professional_background.educations"
              :key="education.id"
              class="q-ml-md q-mt-sm"
            >
              <q-item-label>{{ education.school }}</q-item-label>
              <q-item-label>{{ education.course }}</q-item-label>
              <q-item-label caption>{{
                education.from + " - " + education.to
              }}</q-item-label>
            </div>
          </div>
        </div>
      </q-list>
    </q-card-section>
  </q-card-section>
</template>
<script>
export default {
  props: {
    styles: {
      type: Boolean,
      required: false
    },
    work_length: {
      type: Number,
      required: false
    },
    school_length: {
      type: Number,
      required: false
    },
    education: {
      type: Object,
      required: false
    },
    work: {
      type: Object,
      required: false
    },
    professional_background: {
      type: [Array, Object],
      required: true
    },
    about: {
      type: String,
      required: false
    }
  }
};
</script>
