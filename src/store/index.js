import {configureStore} from '@reduxjs/toolkit';
import watchListSlice from './slice/watchListSlice';
import moviesSlice from './slice/moviesSlice';
import searchSlice from './slice/searchSlice';

const store = configureStore({
  reducer: {
    watchList: watchListSlice,
    movies: moviesSlice,
    searchQuery: searchSlice,
  },
});

export default store;
