<script>
export default {
  data() {
    return {};
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <section>
      <main class="main-section">
        <h1>Titolo - {{ this.items.title }}</h1>
        <h3>Titolo originale - {{ this.items.original_title }}</h3>
        <h4>Lingua: {{ this.items.original_language }}</h4>
        <h4>Voto: {{ this.items.vote_average }}</h4>
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
</style>
