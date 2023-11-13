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
        <ul>
          <li>Titolo - {{ this.items.title }}</li>
          <li>Titolo originale - {{ this.items.original_title }}</li>
          <li>Lingua: {{ this.items.original_language }}</li>
          <li>Voto: {{ this.items.vote_average }}</li>
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
</style>
