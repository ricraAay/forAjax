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
    { text: 'Дата регистрации', value: 'datetime' }
  ]

  //hooks 
  created(): void {
    this.$store.dispatch('getAllManagers')
  }

  //computed
  get managers(): Array<object> {
    return this.$store.getters.allManagers
  }

  //methods
  async routeTransition(event: object, payload: any) {    
    this.$router.push(`/manager/${payload.item.uid}`)
  }

}




</script>
