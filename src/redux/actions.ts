export enum ActionsTypes {
  FETCH_POSTS_LIST_REQUEST = "FETCH_POSTS_LIST_REQUEST",
  FETCH_POSTS_LIST_SUCCESS = "FETCH_POSTS_LIST_SUCCESS",
  FETCH_POSTS_LIST_FAILURE = "FETCH_POSTS_LIST_FAILURE",
  FETCH_POSTS_LIST_SKIPPED = "FETCH_POSTS_LIST_SKIPPED",
  FETCH_COMMENTS_LIST_REQUEST = "FETCH_COMMENTS_LIST_REQUEST",
  FETCH_COMMENTS_LIST_SUCCESS = "FETCH_COMMENTS_LIST_SUCCESS",
  FETCH_COMMENTS_LIST_FAILURE = "FETCH_COMMENTS_LIST_FAILURE",
  ACTION_SELECT_POST = "ACTION_SELECT_POST",
  ACTION_SET_LIKE_POST = "ACTION_SET_LIKE_POST",
  ACTION_UNSET_LIKE_POST = "ACTION_UNSET_LIKE_POST",
  ACTION_SET_LIKE_COMMENT = "ACTION_SET_LIKE_COMMENT",
  ACTION_UNSET_LIKE_COMMENT = "ACTION_UNSET_LIKE_COMMENT",
}
