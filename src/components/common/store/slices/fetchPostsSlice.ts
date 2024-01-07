import { createSlice } from "@reduxjs/toolkit";

export const fetchPostsSlice =  createSlice({
  name: 'posts',
  initialState: { posts: [], loading: false, errors: '', fetched: false, pageCount: 0 },
  reducers: {
    postsRequested(state) {
      state.loading = true;
    },
    postsFailed(state, action) {
      state.loading = false;
      state.fetched = true;
      state.errors = action.payload;
    },
    postsSucceeded(state, action) {
      state.posts = action.payload.hits;
      state.loading = false;
      state.fetched = true;
      state.pageCount = action.payload.nbPages;
    }
  }
});

export const { postsRequested, postsFailed, postsSucceeded} = fetchPostsSlice.actions;