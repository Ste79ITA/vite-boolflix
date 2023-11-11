<script>
import { store } from '../store.js';
import axios from 'axios';
</script>

<template>
  <div>
    <section>
      <main>
        <input type="text" placeholder="Cerca un film o una serie Tv" />
      </main>
      <button>Search</button>
    </section>
  </div>
</template>

<style scoped>
.main {
  border: 1px solid greenyellow;
}
</style>
