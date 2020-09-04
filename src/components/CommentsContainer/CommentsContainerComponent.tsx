import React from "react";
import { useSelector } from "react-redux";
import { selectorComments } from "../../redux/selectors";

export const CommentsContainer = () => {
  const comments = useSelector(selectorComments);
  return <CommentList comments={comments} />;
};

export const CommentList = ({ comments }: any) => (
  <>
    {customElements.Map((comment: any) => (
      <div>{Comment.name}</div>
    ))}
  </>
);
