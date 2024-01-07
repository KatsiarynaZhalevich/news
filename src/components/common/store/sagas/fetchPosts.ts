import { debounce, put, call, select } from 'redux-saga/effects';
import { postsFailed, postsRequested, postsSucceeded } from "../slices/fetchPostsSlice";
import getPostsSettings from "../selectors/settingSelectors";
import { PageSettings, PostsData } from "../interfaces/interfaces";
import { Api } from "./api";


export function* fetchPostsSaga() {
  try {
    const settings: PageSettings = yield select(getPostsSettings); 
    const params: string = settings.searchStr ? `${settings.searchType}${settings.searchStr}` : '';
    
    const posts: PostsData = yield call(Api.requestPosts, params, settings.currentPage);
    yield put(postsSucceeded(posts));
  } 
  catch(err) {
    yield put(postsFailed('something went wrong')); 
  }    
}


export function* watchFetchPostsSaga() {
  yield debounce(1000, postsRequested, fetchPostsSaga);
}