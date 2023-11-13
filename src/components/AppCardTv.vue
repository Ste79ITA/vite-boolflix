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
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<template>
  <div>
    <section>
      <main class="main-section">
        <ul>
          <li>Titolo - {{ this.items.name }}</li>
          <li>Titolo originale - {{ this.items.original_name }}</li>
          <li>Lingua: {{ this.items.original_language }}</li>
          <li>Voto: {{ this.items.vote_average }}</li>
        </ul>
        <h1></h1>
        <h3></h3>
        <h4></h4>
        <h4></h4>
      </main>
    </section>
  </div>
</template>

<style scoped>
.main-section {
  max-width: 700px;
  background-color: cornflowerblue;
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
