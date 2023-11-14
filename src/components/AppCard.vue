<script>
import { store } from '../store';
export default {
  data() {
    return { store, contentIsVisible: false };
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
    poster: function () {
      return store.posterUrl + this.item.poster_path;
    },
  },
  methods: {
    showContent() {
      this.contentIsVisible = true;
      console.log('SHOW', this.contentIsVisible);
    },
    hideContent() {
      this.contentIsVisible = false;
      console.log('HIDE', this.contentIsVisible);
    },
  },
};
</script>

<template>
  <div>
    <section>
      <main
        @mouseenter="showContent()"
        @mouseleave="hideContent()"
        class="main-section"
      >
        <div v-if="item.poster_path">
          <img
            :class="{ toggleContent: this.contentIsVisible }"
            class="card-img"
            :src="poster"
            alt=""
          />
        </div>
        <div v-else>
          <img
            :class="{ toggleContent: this.contentIsVisible }"
            class="card-img"
            src="/no-poster.png"
            alt=""
          />
        </div>
        <ul class="card-content">
          <li><span>Titolo: </span> {{ item.title || item.name }}</li>
          <li>
            <span>Titolo originale: </span>
            {{ item.original_title || item.original_name }}
          </li>
          <li v-if="srcFlag">
            <span>Lingua: </span><img class="flag-img" :src="srcFlag" alt="" />
          </li>
          <li v-else><span>Lingua: </span>{{ item.original_language }}</li>
          <li class="stars">
            <span>Voto: </span>
            <div class="star" v-for="star in 5">
              <font-awesome-icon
                :icon="[star <= voteToStar ? 'fas' : 'far', 'star']"
              />
            </div>
          </li>
          <li>
            <span>Sinossi: </span>
            {{ item.overview }}
          </li>
        </ul>
      </main>
    </section>
  </div>
</template>

<style scoped lang="scss">
.main-section {
  width: 300px;
  height: 450px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: start;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  background-color: black;
  position: relative;
  padding: 15px;
  margin-right: 20px;
}

.card-content {
  color: white;
  overflow-y: auto;
}
.card-img {
  width: 298px;
  position: absolute;
  top: 0;
  left: 0;
}

.toggleContent {
  opacity: 0;
  transition: 0.5s;
}

.flag-img {
  width: 30px;
  margin-left: 5px;
}

.stars {
  display: flex;

  .star {
    color: yellow;
  }
}
span {
  font-weight: bold;
}

li {
  margin-bottom: 10px;
  font-weight: 100;
}

.noPoster {
  background-color: red;
}
</style>
