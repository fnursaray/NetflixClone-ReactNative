import {createSlice} from '@reduxjs/toolkit';
import {getSearchQuery} from '../actions/movieActions';

const initialState = {
  results: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSearchQuery.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSearchQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(getSearchQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default searchSlice.reducer;
