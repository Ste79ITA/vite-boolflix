<script>
import { store } from './store.js';
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';

export default {
  components: {
    AppMain,
    AppHeader,
  },
  data() {
    return { store };
  },
  methods: {
    search() {
      if (!store.searchText) {
        store.movieResults = '';
        store.tvResults = '';
        return;
      }

      axios
        .get(store.API_MovieAddress, {
          params: {
            api_key: store.API_KEY,
            query: store.searchText,
            language: 'it-IT',
          },
        })
        .then((res) => {
          store.movieResults = res.data.results;
        })
        .catch((er) => {
          console.log(err);
          store.movieResults = '';
          store.tvResults = '';
        });

      axios
        .get(store.API_TvAddress, {
          params: {
            api_key: store.API_KEY,
            query: store.searchText,
            language: 'it-IT',
          },
        })
        .then((res) => {
          store.tvResults = res.data.results;
          store.tvResults.forEach((serie) => {
            serie.title = serie.name;
            serie.original_title = serie.original_name;
          });
        })
        .catch((err) => {
          console.log(err);
          store.movieResults = '';
          store.tvResults = '';
        });
    },
  },
};
</script>

<template>
  <div>
    <AppHeader @search="this.search()" />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use '../src/style/general.scss';
</style>
