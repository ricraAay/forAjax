<template>
  <div class="page-managers">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      @dblclick:row="dblclick"
      class="elevation-1"
    ></v-data-table>

    <popup 
      :state="popup" 
      @statePopup="controlStatePopup"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Popup from '../components/Popup.vue'

const Managers = Vue.extend({
  data: () => ({
    popup: false,
    headers: [
      { text: 'Фамилия', value: 'surname' },
      { text: 'Имя', value: 'name' },
      { text: 'Подразделение', value: 'department' },
      { text: 'Дата регистрации', value: 'dateAndTime' }
    ],
    desserts: [
      {
        id: Date.now(),
        uuid: 'B13-2131231231-312W-QWE',
        surname: 'Царьков',
        name: 'Юрий',
        department: 'Отдел продаж',
        dateAndTime: '24.01.2021 14:00',
      }
    ]
  }),
  methods: {
    dblclick (event: any, data: any) {
      console.log(data.item)
      this.popup = !this.popup
    },
    controlStatePopup (value: boolean) {
      console.log(1);
    }
  },
  components: {
    Popup
  }
  
})

export default Managers

</script>
