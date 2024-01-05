import { all } from 'redux-saga/effects'

import { watchFetchPostsSaga } from './fetchPosts'

export default function* rootSaga() {
  yield all([
    watchFetchPostsSaga()
  ])
}