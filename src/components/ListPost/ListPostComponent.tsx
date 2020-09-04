import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorPosts,
  selectorSelectedPostId,
  selectorLikePostId,
} from "../../redux/selectors";
import { ActionsTypes } from "../../redux/actions";

export const ListPost: FC = (): JSX.Element => {
  const postList = useSelector(selectorPosts);
  const selectedPostId: any = useSelector(selectorSelectedPostId);
  const arraySelectedLikePostId: any = useSelector(selectorLikePostId);
  const dispatch = useDispatch();

  const getComments = (id: number) => {
    dispatch({ type: ActionsTypes.FETCH_COMMENTS_LIST_REQUEST, payload: id });
  };

  useEffect(() => {
    dispatch({
      type: ActionsTypes.ACTION_SET_LIKE_POST,
      payload: selectedPostId,
    });
  }, [selectedPostId]);

  useEffect(() => {
    dispatch({
      type: ActionsTypes.FETCH_POSTS_LIST_REQUEST,
    });
  }, []);

  return (
    <>
      {postList.map((post: any) => (
        <button
          style={{
            border: post.id === selectedPostId ? "1px solid red" : "none",
            background: arraySelectedLikePostId.includes(post.id)
              ? "yellow"
              : "none",
          }}
          onClick={() => getComments(post.id)}
        >
          {post.title}
        </button>
      ))}
    </>
  );
};
