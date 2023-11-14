<script>
import { store } from '../store.js';
import AppCard from './AppCard.vue';

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCard },
  computed: {
    movieResults: function () {
      return store.movieResults;
    },
    tvResults: function () {
      return store.tvResults;
    },
  },
};
</script>
<template>
  <div class="main-section">
    <div class="movie-row">
      <template v-if="movieResults" class="movies-row">
        <h1>Movies</h1>
        <div class="card-container">
          <AppCard
            v-for="(result, i) in movieResults"
            :items="movieResults[i]"
            :key="movieResults[i].id"
          />
        </div>
      </template>
    </div>
    <div class="tv-row">
      <template v-if="tvResults" class="tv-row">
        <h1>TV Series</h1>
        <div class="card-container">
          <AppCard
            v-for="(result, i) in tvResults"
            :items="tvResults[i]"
            :key="tvResults[i].id"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.main-section {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}

.card-container {
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
}

.movie-row,
.tv-row {
  padding: 10px 0px;
  overflow-x: auto;
}
</style>
