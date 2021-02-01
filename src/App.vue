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
      <v-row class="align-center">
        <v-app-bar-nav-icon 
          color="white"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-text-field
          autocomplete="off"
          v-model.trim="payload"
          clearable
          dense
          hide-details
          hide-selected
          item-text="name"
          item-value="symbol"
          label="Поиск..."
          solo
          elevation
          @click:clear="clearFilter"
        />
        <v-btn
          class="ml-4 mr-3"
          elevation
          color="white"
          @click="filtrationStore"
        >Найти</v-btn>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container class="pl-10  pr-10">
        <transition name="component-fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>

  </v-app>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  selectedItem: number = 1
  drawer: boolean = true 
  payload: string = ''

  items: Array<object> = [
    { text: 'Новый менеджер', icon: 'mdi-account', path: '/registration' },
    { text: 'Список менеджеров', icon: 'mdi-account-group', path: '/' }
  ]

  created(): void {
    this.$store.dispatch('loadingDepartments')
  }

  @Watch('payload')
  reloadStateManagers(value: string): void {
    if(!value) {
      this.clearFilter()
    }
  }

  filtrationStore(): void {
    if (this.payload) {
      this.$store.commit('filtrationManagersList', this.payload)
      this.$router.push({ path: '/', query: { find: this.payload }})
    } 
  }

  clearFilter(): void {
    this.$store.dispatch('loadingManagers')
  }

}
</script>

<style>
  .component-fade-enter-active, 
  .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }
</style>
