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
          store.movieResults = res.data;
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
          store.tvResults = res.data;
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
