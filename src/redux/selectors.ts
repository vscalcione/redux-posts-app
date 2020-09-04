export const selectorPosts = (state: any) => state.posts.list;
export const selectorComments = (state: any) =>
  state.selectedPost.comments.list;
export const selectorSelectedPostId = (state: any) => state.selectedPost.id;
export const selectorLikePostId = (state: any) => state.posts.likeIds;
