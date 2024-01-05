import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentPage: 1, searchType: '&query=', searchStr: '' }

export const settingSlice =  createSlice({
  name: 'page',
  initialState,
  reducers: {
    updatePagination(state, action) {
      state.currentPage = action.payload;
    },
    updateSearchType(state, action) {
      state.searchType = action.payload;
      state.currentPage = 1;
    },
    updateSearchParams(state, action) {
      state.searchStr = action.payload.searchString;
      state.searchType = action.payload.searchType;
      state.currentPage = 1;
    },
  }
});

export const { updatePagination, updateSearchParams, updateSearchType } = settingSlice.actions;