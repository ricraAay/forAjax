<template>
  <v-app id="inspire">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      
    </v-navigation-drawer>

    <v-app-bar app
      color="red lighten-1"
    >
      <v-app-bar-nav-icon 
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>АЯКС</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="pl-10  pr-10">
        <h2 class="display-1 pb-10 pt-10">Список менеджеров</h2>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  drawer: boolean = true 
}

</script>
