<template>
  <v-col cols="6" class="pt-0 pl-0">

    <h2 class="display-1 pb-10 pt-10">Новый менеджер</h2>
    
    <v-form 
      autocomplete="off"
      @submit.prevent="submit"
    >
      <v-text-field
        v-model="manager.name"
        color="grey darken-1"
        class="pb-3"
        outlined
        dense
        label="Имя"
      ></v-text-field>

      <v-text-field
        v-model="manager.surname"
        color="grey darken-1"
        class="pb-3"
        outlined
        dense
        label="Фамилия"
      ></v-text-field>

      <v-autocomplete
        v-model="manager.department"
        :items="departments"
        color="grey darken-1"
        class="pb-3"
        outlined
        dense
        label="Подразделение"
      ></v-autocomplete>
      
      <v-text-field
        v-model="manager.registration"
        color="grey darken-1"
        class="pb-3"
        outlined
        dense
        label="Дата регистрации"
      ></v-text-field>
      
      <v-btn 
        type="submit"
        large 
        elevation
        color="secondary"
      >Добавить</v-btn>

    </v-form>
    
  </v-col>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CreatedManager extends Vue {
  manager = {
    name: '',
    surname: '',
    date: '',
    department: ''
  }
  
  created(): void {
    this.$store.dispatch('getDepartments')
  }

  get departments(): Array<object> {
    return this.$store.state.departments.departments
      .map((n: any) => n.data().name)
  }
  
  submit(): void {
    this.$store.dispatch('addNewManager', {
      ...this.manager,
      id: Date.now()
    })
  }
}

</script>