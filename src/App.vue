<template>
  <v-app id="inspire">

    <v-navigation-drawer
      v-model="drawer"
      app
    ></v-navigation-drawer>

    <v-app-bar app
      color="red lighten-1"
    >
      <v-app-bar-nav-icon 
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>АЯКС</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <h2 class="pb-5 pt-3">Список менеджеров</h2>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data: () => ({
    drawer: true
  }),
});
</script>
