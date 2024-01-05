import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";
import { settingSlice } from "./slices/settingSlice";
import { fetchPostsSlice } from "./slices/fetchPostsSlice";

export type Post = {
  author: string,
  title: string,
  url: string,
  story_id?: string
}

export type PageSettings = {
  currentPage: number,
  searchType: '&query=' | ',author_',
  searchStr: string,
}
export type PostsData = {
  posts: Post[], 
  loading: boolean,
  errors: string,
  fetched: boolean,
  pageCount: number
}
export type Store  = {
  page: PageSettings,
  posts: PostsData
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    page: settingSlice.reducer, 
    posts: fetchPostsSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(sagaMiddleware),
});

export { store };

sagaMiddleware.run(rootSaga);
