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
    <nav class="header-nav">
      <h1 class="header-title">BOOLFLIX</h1>
      <input
        @keyup.enter="$emit('search')"
        v-model="store.searchText"
        type="text"
        placeholder="Search"
      />
    </nav>
  </header>
</template>

<style lang="scss">
.header-nav {
  max-width: 100vw;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px;
}
.header-title {
  color: red;
}
</style>
