import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";
import { settingSlice } from "./slices/settingSlice";
import { fetchPostsSlice } from "./slices/fetchPostsSlice";

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
