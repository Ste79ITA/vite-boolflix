import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  API_KEY: 'c37e58bb593630c699aa93fad9493b50',
  API_MovieAddress: 'https://api.themoviedb.org/3/search/movie',
  API_TvAddress: 'https://api.themoviedb.org/3/search/tv',
  movieResults: [],
  tvResults: [],
  flags: {
    en: '/flags/uk.png',
    ja: '/flags/jp.png',
    de: '/flags/de.png',
    es: '/flags/es.png',
    fr: '/flags/fr.png',
    it: '/flags/ita.png',
  },
  posterUrl: 'https://image.tmdb.org/t/p/w154/',
});
