<script>
import { store } from './store.js';
import PageMain from './components/PageMain.vue';

export default {
  components: {
    PageMain,
  },
  data() {
    return { store };
  },
};
</script>

<template>
  <div>
    <PageMain />
  </div>
</template>

<style lang="scss"></style>
