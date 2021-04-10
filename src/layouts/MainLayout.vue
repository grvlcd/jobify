<template>
  <q-layout view="hHh LpR fff">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          v-if="!matchRoute($route.fullPath.toString())"
          dense
          flat
          round
          icon="menu"
          @click="drawer = !drawer"
        />

        <q-btn
          v-if="matchRoute($route.fullPath.toString())"
          v-go-back.single
          dense
          flat
          icon="west"
        >
          <div class="q-pt-xs">Back</div>
        </q-btn>

        <q-toolbar-title>
          {{ $route.name }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="300" :breakpoint="400">
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="home" />
            </q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>
          <q-item to="/portfolio" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="perm_contact_calendar" />
            </q-item-section>
            <q-item-section>Portfolio</q-item-section>
          </q-item>
          <q-item to="/works" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="work" />
            </q-item-section>
            <q-item-section>Works</q-item-section>
          </q-item>
          <q-item to="/settings" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="settings" />
            </q-item-section>
            <q-item-section>Settings</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      patt: "^\/[a-zA-Z]+\/[a-zA-Z0-9]+|[0-9]+"
    };
  },
  methods: {
    matchRoute(route) {
      let reg = new RegExp(this.patt);
      return reg.test(route);
    }
  }
};
</script>
