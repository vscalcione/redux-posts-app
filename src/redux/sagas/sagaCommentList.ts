import { call, put } from "redux-saga/effects";
import { ActionsTypes } from "../actions";

const apiCommentList = async (idPost: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${idPost}/comments`
  );
  return response.json();
};

export function* sagaCommentList(action: any) {
  try {
    const response = yield call(apiCommentList, action.payload);
    yield put({
      type: ActionsTypes.FETCH_COMMENTS_LIST_SUCCESS,
      payload: { comments: response, idPost: action.payload },
    });
  } catch (error) {
    yield put({
      type: ActionsTypes.FETCH_COMMENTS_LIST_FAILURE,
      payload: error.message,
    });
  }
}
