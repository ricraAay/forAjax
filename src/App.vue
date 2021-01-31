<template>
  <v-app id="inspire">

    <v-navigation-drawer
      class="align-center"
      v-model="drawer"
      color="grey lighten-5"
      app
    >   

      <v-list>
        <v-list-item>
          <v-img class="mt-8 ml-14 mb-5" src="/logo2.png" max-width="100"></v-img>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              АЯКС РИЭЛТ
            </v-list-item-title>
            <v-list-item-subtitle>Агенство недвижимости </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="red" 
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app
      color="red"
    >
      <v-row>
        <v-app-bar-nav-icon 
          color="white"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container class="pl-10  pr-10">
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

  selectedItem: number = 1
  
  items: Array<object> = [
    { text: 'Новый менеджер', icon: 'mdi-account', path: '/registration' },
    { text: 'Список менеджеров', icon: 'mdi-account-group', path: '/' }
  ]

}

</script>
