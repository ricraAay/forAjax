<template>
  <div class="page-managers">
    <h2 class="display-1 pb-10 pt-10">Список менеджеров</h2>
    <v-data-table
      :headers="headers"
      :items="managers"
      :items-per-page="5"
      @dblclick:row="routeTransition"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Managers extends Vue {
  // data 
  headers: Array<object> = [
    { text: 'Фамилия', value: 'surname' },
    { text: 'Имя', value: 'name' },
    { text: 'Подразделение', value: 'department' },
    { text: 'Дата регистрации', value: 'registration' }
  ]

  //hooks 
  created(): void {
    console.log(this.$route.query.find)
    
    !this.$route.query.find
      ? this.$store.dispatch('loadingManagers')
      : this.$store.commit('filtrationManagersList', this.$route.query.find)
  }

  //computed
  get managers(): Array<object> {
    return this.$store.getters.allManagers
  }

  //methods
  async routeTransition(event: object, payload: any) {    
    this.$router.push(`/manager/${payload.item.guid}`)
  }

}




</script>
