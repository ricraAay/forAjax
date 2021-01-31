<template>
  <v-col cols="6" class="pt-0 pl-0">
    <h2 class="display-1 pb-10 pt-10">Редактирование учетной записи </h2>
    <v-form
      autocomplete="off"
    >
      <v-text-field
        v-model="manager.name"
        label="Имя"
        outlined
        dense
        color="grey darken-1"
      ></v-text-field>
      <v-text-field
        v-model="manager.surname"
        label="Фамилия"
        outlined
        dense
        color="grey darken-1"
      ></v-text-field>
      <v-text-field
        v-model="manager.registration"
        label="Имя"
        outlined
        dense
        color="grey darken-1"
      ></v-text-field>
      <v-btn
        type="submit"
        large
        elevation
        color="secondary"
      >
        Сохранить
      </v-btn>
      <v-btn 
        type="submit"
        large 
        elevation
        plain
      >Удалить</v-btn>
    </v-form>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class EditingManagers extends Vue {
  
  id: any = this.$route.params.id || location.href.split('/').pop()

  manager: any = {}

  async created(): Promise<any> {
    this.manager = await this.$store.dispatch('getCurrentManager', this.id)
  }

  get fullname(): string {
    return this.manager.surname + ' ' + this.manager.name
  }
}


</script>