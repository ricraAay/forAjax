<template>
  <div class="page-managers">
    <v-data-table
      :headers="headers"
      :items="desserts"
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
  headers: Array<object> = [
    { text: 'Фамилия', value: 'surname' },
    { text: 'Имя', value: 'name' },
    { text: 'Подразделение', value: 'department' },
    { text: 'Дата регистрации', value: 'dateAndTime' }
  ]

  desserts: Array<object> = [
    {
      id: Date.now(),
      uuid: 'B13-2131231231-312W-QWE',
      surname: 'Царьков',
      name: 'Юрий',
      department: 'Отдел продаж',
      dateAndTime: '24.01.2021 14:00',
    }
  ]

  routeTransition(event: object, manager: any): void {
    this.$router.push(`/editing-manager/${manager.item.id}`)
  }

}




</script>
