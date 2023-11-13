<script>
import { store } from '../store.js';
import AppCardMovie from './AppCardMovie.vue';
import AppCardTv from './AppCardTv.vue';

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCardMovie, AppCardTv },
  computed: {
    movieResults: function () {
      return store.movieResults.results;
    },
    tvResults: function () {
      return store.tvResults.results;
    },
  },
};
</script>
<template>
  <div class="section">
    <div class="container">
      <div class="card-container">
        <AppCardMovie
          v-for="(result, i) in movieResults"
          :items="movieResults[i]"
          :key="movieResults[i].id"
        />
      </div>
      <div class="card-container">
        <AppCardTv
          v-for="(result, i) in tvResults"
          :items="tvResults[i]"
          :key="tvResults[i].id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
