<template>
  <v-col cols="6" class="pt-0 pl-0">

    <h2 class="display-1 pb-10 pt-10">Новый менеджер</h2>
    
    <v-form 
      autocomplete="off"
      @submit.prevent="submit"
    >
      <v-text-field
        v-model.trim="manager.name"
        color="grey darken-1"
        class="pb-3"
        outlined
        dense
        label="Имя"
      ></v-text-field>

      <v-text-field
        v-model.trim="manager.surname"
        color="grey darken-1"
        class="pb-3"
        outlined
        dense
        label="Фамилия"
      ></v-text-field>

      <v-autocomplete
        v-model.trim="manager.department"
        :items="departments"
        color="grey darken-1"
        class="pb-3"
        outlined
        dense
        label="Подразделение"
      ></v-autocomplete>
      
      <v-text-field
        v-model.trim="manager.registration"
        type="datetime-local"
        color="grey darken-1"
        class="pb-3"
        outlined
        dense
        label="Дата регистрации"
      ></v-text-field>
      
      <v-btn 
        :disabled="isDisabled"
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

// @ts-ignore 
import { v4 as uuidv4 } from  'uuid'

import IManager from '@/models/iManager'
import IDepartment from '@/models/iDepartment'

@Component
export default class CreatedManager extends Vue {
  manager: IManager = {
    id: Date.now(),
    guid: uuidv4(),
    name: '',
    surname: '',
    registration: '',
    department: ''
  }

  get isDisabled(): boolean {
    return this.manager.name 
      && this.manager.surname 
      && this.manager.registration 
      && this.manager.department ? false : true
  }

  get departments(): Array<IDepartment> {
    return this.$store.getters.getDepartments
  }
  
  submit(): void {
    this.$store.dispatch('addManager', this.manager)
      .then(() => this.$router.push('/'))
  }
}

</script>