<template>
  <div class="page-managers">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
/* import HelloWorld from '@/components/HelloWorld.vue';  */

@Component({
  components: {
    /* HelloWorld, */
  },
})
export default class Managers extends Vue {
  items: Array<object> = []
}
</script>
