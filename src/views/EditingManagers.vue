<template>
  <div>{{ $route.params.id }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class EditingManagers extends Vue {
  created():void {
    console.log(this.$route.params.id);
  }
}


</script>