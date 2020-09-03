import { put } from 'redux-saga/effects';
import { ActionsTypes } from '../actions';

export function* sagaPostList() {
    yield put({ type: ActionsTypes.FETCH_COMMENTS_LIST_SUCCESS, payload: { posts: [] } });
}