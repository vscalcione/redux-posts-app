import { Utility } from "../../utils/Utility";
import { ActionsTypes } from "../actions";

export const reducerIsFetching = (prevState: any = {}, action: any) => {
  let clonedState = Utility.clone(prevState);

  switch (action.type) {
    case ActionsTypes.FETCH_POSTS_LIST_REQUEST:
      clonedState.posts = true;
      break;
    case ActionsTypes.FETCH_POSTS_LIST_SUCCESS:
    case ActionsTypes.FETCH_POSTS_LIST_FAILURE:
      delete clonedState.posts;
      break;
    default:
      break;
  }
  return clonedState;
};
