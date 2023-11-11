<script>
import { store } from '../store.js';
import AppCardMovie from './AppCardMovie.vue';
import AppCardTv from './AppCardTv.vue';
import axios from 'axios';

export default {
  data() {
    return {
      store,
      API_KEY: 'api_key=c37e58bb593630c699aa93fad9493b50',
      API_MovieAddress: 'https://api.themoviedb.org/3/search/movie?',
      API_TvAddress: 'https://api.themoviedb.org/3/search/tv?',
      movieResults: {},
      tvResults: {},
    };
  },
  components: { AppCardMovie, AppCardTv },
  methods: {
    search() {
      axios
        .get(
          `${this.API_MovieAddress}${this.API_KEY}&query=${store.searchText}`
        )
        .then((res) => {
          this.movieResults = res.data;
        });

      axios
        .get(`${this.API_TvAddress}${this.API_KEY}&query=${store.searchText}`)
        .then((res) => {
          this.tvResults = res.data;
        });
    },
  },
};
</script>

<template>
  <div class="section">
    <main class="main-section">
      <input
        @keyup.enter="search()"
        v-model="this.store.searchText"
        type="text"
        placeholder="Cerca un film o una serie Tv"
      />
      <button @click="search()" @keyup.enter="search()">Search</button>
    </main>
    <div class="container">
      <div class="card-container">
        <AppCardMovie
          v-for="(result, i) in this.movieResults.results"
          :items="this.movieResults.results[i]"
          key="i"
        />
      </div>
      <div class="card-container">
        <AppCardTv
          v-for="(result, i) in this.tvResults.results"
          :items="this.tvResults.results[i]"
          key="i"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  padding-top: 50px;
}
.main-section {
  max-width: 700px;
  background-color: grey;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  border-radius: 15px;
}

.card-container {
  border: 1px solid greenyellow;
  max-width: 750px;
  margin: 0 auto;
  margin-top: 50px;
  padding-bottom: 50px;
  border-radius: 20px;
}

.container {
  display: flex;
}
</style>
