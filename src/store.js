import { reactive } from 'vue';

export const store = reactive({
  searchText: '',
  API_KEY: 'c37e58bb593630c699aa93fad9493b50',
  API_MovieAddress: 'https://api.themoviedb.org/3/search/movie',
  API_TvAddress: 'https://api.themoviedb.org/3/search/tv',
  movieResults: [],
  tvResults: [],
});
