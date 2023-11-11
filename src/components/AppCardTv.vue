<script>
export default {
  data() {
    return {
      flags: [{ name: 'ja', value: 'JP' }],
    };
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // countryFlag() {
    //   let x = this.items.original_language;
    //   this.flags.forEach(function (item) {
    //     if (item.name === x) {
    //       // return console.log(item.value);
    //       let icon = `https://flagsapi.com/${item.value}/shiny/64.png`;
    //       console.log(icon);
    //       console.log('https://flagsapi.com/JP/shiny/64.png');
    //     }
    //   });
    // },
  },
  computed: {
    countryFlag: function () {
      let x = this.items.original_language;
      this.flags.forEach(function (item) {
        if (item.name === x) {
          let icon = `https://flagsapi.com/${item.value}/shiny/64.png`;
          console.log(icon);
        } else {
          return 'noflag';
        }
      });
    },
  },
  mounted() {
    console.log(this.countryFlag);
  },
};
</script>

<template>
  <div>
    <section>
      <main class="main-section">
        <h1>Titolo - {{ this.items.name }}</h1>
        <h3>Titolo originale - {{ this.items.original_name }}</h3>
        <h4>Lingua: {{ this.items.original_language }}</h4>
        <h4>Voto: {{ this.items.vote_average }}</h4>
        <img v-if="this.countryFlag != undefined" :src="this.icon" />
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
