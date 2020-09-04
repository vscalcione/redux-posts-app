import { put, call, select } from 'redux-saga/effects';
import { ActionsTypes } from '../actions';

// const apiList = () => {
//   return fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.json()) //JSON parse
//     .then((result) => result);
// };

const apiList = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

export function* sagaPostList() {
  const list = yield select((state) => state.posts.list);
  if (list.length > 0) {
    yield put({ type: ActionsTypes.FETCH_POSTS_LIST_SKIPPED });
    return;
  }
  try {
    //API
    const response = yield call(apiList);
    yield put({ type: ActionsTypes.FETCH_POSTS_LIST_SUCCESS, payload: response });
  } catch (e) {
    yield put({
      type: ActionsTypes.FETCH_POSTS_LIST_FAILURE,
      payload: { message: e.message },
    });
  }
}
