<script lang="ts">
import Vue from 'vue';
import { VueTsLibSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueTsLibSample,
  }
});
</script>

<template>
  <div id="app">
    <vue-ts-lib-sample />
  </div>
</template>
