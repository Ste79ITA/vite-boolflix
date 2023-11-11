<script>
import { store } from '../store.js';
import AppCard from './AppCard.vue';

export default {
  data() {
    return { store };
  },
  components: { AppCard },
  methods: {
    search() {
      console.log(store.searchText);
    },
  },
  updated() {},
};
</script>

<template>
  <div class="section">
    <main class="main-section">
      <input
        v-model="this.store.searchText"
        type="text"
        placeholder="Cerca un film o una serie Tv"
      />
      <button @click="search()">Search</button>
    </main>
    <div class="card-container">
      <AppCard />
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
</style>
