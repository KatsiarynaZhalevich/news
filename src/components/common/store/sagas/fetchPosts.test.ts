import { call, put, select } from 'redux-saga/effects'
import { cloneableGenerator } from '@redux-saga/testing-utils'

import { Api } from './api';
import { postsSucceeded } from '../slices/fetchPostsSlice';
import getPostsSettings from "../selectors/settingSelectors";
import { fetchPostsSaga } from './fetchPosts';

describe('fetchPost saga', () => {
  it("featchPost saga should successfully update store", () => {
    const settings = {searchStr: '123', searchType: 'query=', currentPage: 1};
    const saga = cloneableGenerator<any>(fetchPostsSaga)(settings);
    
    // get settings 
    expect(saga.next().value).toEqual(select(getPostsSettings));
    // request data
    expect(saga.next(settings).value).toEqual(call(Api.requestPosts, `${settings.searchType}${settings.searchStr}`, settings.currentPage))
    // update store
    expect(saga.next().value).toEqual(put(postsSucceeded(undefined)))
    // done 
    expect(saga.next().done).toBe(true)
  });
})