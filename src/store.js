import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  API_KEY: 'c37e58bb593630c699aa93fad9493b50',
  API_MovieAddress: 'https://api.themoviedb.org/3/search/movie',
  API_TvAddress: 'https://api.themoviedb.org/3/search/tv',
  movieResults: [],
  tvResults: [],
  flags: {
    en: '/flags/uk.jpg',
    ja: '/flags/jp.jpg',
    de: '/flags/de.jpg',
    es: '/flags/es.jpg',
    fr: '/flags/fr.jpg',
    it: '/flags/ita.jpg',
  },
});
