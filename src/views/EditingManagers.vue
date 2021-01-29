<template>
  <div>{{ manager.name }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

//Models
import IManager from '@/models/iManager'

@Component
export default class EditingManagers extends Vue {
  
  manager = {}

  created():void {
    this.manager = this.$store.state.database.managers.filter((manager: any) => {
      return manager.id === Number(this.$route.params.id)
    })[0] 
  }
}


</script>