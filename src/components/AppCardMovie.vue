<script>
import { store } from '../store';
export default {
  data() {
    return { store };
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  computed: {
    srcFlag: function () {
      return store.flags[this.items.original_language];
    },
    item: function () {
      return this.items;
    },
  },
};
</script>

<template>
  <div>
    <section>
      <main class="main-section">
        <ul>
          <li>
            <img :src="`${store.posterUrl}${item.poster_path} `" alt="" />
          </li>
          <li>Titolo - {{ item.title }}</li>
          <li>Titolo originale - {{ item.original_title }}</li>
          <li v-if="srcFlag">
            <img class="flag-img" :src="srcFlag" alt="" />
          </li>
          <li v-else>Lingua: {{ item.original_language }}</li>
          <li>Voto: {{ item.vote_average }}</li>
        </ul>
      </main>
    </section>
  </div>
</template>

<style scoped>
.main-section {
  max-width: 700px;
  background-color: grey;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}

.flag-img {
  width: 30px;
}
</style>
