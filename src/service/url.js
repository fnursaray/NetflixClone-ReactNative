const BASE_URL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const TOP_RATED_MOVIE_URL = 'movie/top_rated';
const CATEGORIES_URL = 'genre/movie/list';
const POPULAR_MOVIE_URL = 'movie/popular';
const UPCOMING_MOVIE_URL = 'movie/upcoming';
const MOVIE_URL = 'movie/';

const getSearchQueryURL = query => `${BASE_URL}search/multi?query=${query}`;

export {
  BASE_URL,
  TOP_RATED_MOVIE_URL,
  CATEGORIES_URL,
  IMAGE_BASE_URL,
  POPULAR_MOVIE_URL,
  UPCOMING_MOVIE_URL,
  MOVIE_URL,
  getSearchQueryURL,
};
