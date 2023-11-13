<script>
import { store } from '../store';

export default {
  data() {
    return { store };
  },
};
</script>

<template>
  <header>
    <nav class="main-section">
      <input
        @keyup.enter="$emit('search')"
        v-model="store.searchText"
        type="text"
        placeholder="Cerca tra film e serie Tv"
      />
      <button @click="$emit('search')">Search</button>
    </nav>
  </header>
</template>

<style></style>
