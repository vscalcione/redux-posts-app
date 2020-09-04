import React from "react";
import { ListPost } from "./components/ListPost/ListPostComponent";
import { CommentsContainer } from "./components/CommentsContainer/CommentsContainerComponent";

export default function App() {
  return (
    <>
      <ListPost />
      <CommentsContainer />
    </>
  );
}
