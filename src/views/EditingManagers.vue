<template>
  <v-col cols="6" class="pt-0 pl-0">
    <h2 class="display-1 pb-10 pt-10">Редактирование учетной записи </h2>
    <v-form
      v-if="currentManager"
      autocomplete="off"
    >
      <v-text-field
        v-model="currentManager.name"
        label="Имя"
        outlined
        dense
        color="grey darken-1"
      ></v-text-field>
      
      <v-text-field
        v-model="currentManager.surname"
        label="Фамилия"
        outlined
        dense
        color="grey darken-1"
      ></v-text-field>

      <v-autocomplete
        v-model.trim="currentManager.department"
        :items="departments"
        color="grey darken-1"
        class="pb-3"
        outlined
        dense
        label="Подразделение"
      ></v-autocomplete>

      <v-text-field
        v-model="currentManager.registration"
        type="datetime-local"
        label="Дата регистрации"
        outlined
        dense
        color="grey darken-1"
      ></v-text-field>

      <v-btn
        @click="updateManager"
        large
        elevation
        color="secondary"
      >
        Сохранить
      </v-btn>
      <v-btn 
        @click="dialog = true"
        large 
        elevation
        plain
      >Удалить</v-btn>
    </v-form>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="320"
    >
      <v-card>
        <v-card-title class="headline">
          Удаление
        </v-card-title>
        <v-card-text>Вы действительно хотите удалить менеджера {{ `${currentManager.surname} ${currentManager.name}` }} ?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            plain
            @click="dialog = false"
          >
            Отмена
          </v-btn>
          <v-btn
            color="red"
            text
            @click="removeManager"
          >
            Удалить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import IDepartment from '@/models/iDepartment'

@Component
export default class EditingManagers extends Vue {
  
  uid: any  = this.$route.params.id || location.href.split('/').pop()
  dialog: boolean = false

  created(): void {
    this.$store.dispatch('getCurrentManager', this.uid)
  }

  get currentManager() {
    return this.$store.state.managers.currentManager
  }

  get departments(): Array<IDepartment> {
    return this.$store.getters.getDepartments
  }

  updateManager(): void {
    this.$store.dispatch('updateCurrentManager', this.currentManager)
      .then(() => this.$router.push('/'))
  }

  removeManager(): void {
    this.$store.dispatch('removeManager', this.uid)
      .then(() => this.$router.push('/'))
  }

}


</script>