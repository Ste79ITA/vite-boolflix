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
    voteToStar: function () {
      return Math.round(this.item.vote_average / 2);
    },
  },
};
</script>

<template>
  <div>
    <section>
      <main class="main-section">
        <ul>
          <li v-if="item.poster_path">
            <img :src="`${store.posterUrl}${item.poster_path}`" alt="" />
          </li>
          <li>Titolo - {{ item.title }}</li>
          <li>Titolo originale - {{ item.original_title }}</li>
          <li v-if="srcFlag">
            <img class="flag-img" :src="srcFlag" alt="" />
          </li>
          <li v-else>Lingua: {{ item.original_language }}</li>
          <li class="stars">
            Voto:
            <div class="star" v-for="star in 5">
              <font-awesome-icon
                :icon="[star <= voteToStar ? 'fas' : 'far', 'star']"
              />
            </div>
          </li>
        </ul>
      </main>
    </section>
  </div>
</template>

<style scoped lang="scss">
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
</style>
