<template>
  <div class="page-managers">
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
    { text: 'Дата регистрации', value: 'dateAndTime' }
  ]

  //hooks 
  created(): void {
    this.$store.dispatch('getAllManagers')
  }

  //computed
  get managers(): Array<Object> {
    return this.$store.state.database.managers
  }

  //methods
  async routeTransition(event: object, payload: any) {    
    this.$router.push(`/editing/${payload.item.id}`)

    /* this.$store.dispatch('addNewManager', {
      id: Date.now(),
      name: 'Давид',
      surname: 'Файзулин',
      guid: 'Aa34-WQEE-123ADQ-1231edW-12',
      registration: new Date() 
    })

    this.$store.dispatch('getAllManagers') */
  }

}




</script>
