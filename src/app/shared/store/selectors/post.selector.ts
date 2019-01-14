import { AppState } from "../reducers";
import { createSelector } from "@ngrx/store";


export const selectPosts = (state: AppState) => state.posts;

export const selectPostsbyUser = createSelector(
    selectPosts,
    state => state.posts
);


export const selectPostbyIdUser = (id)=> createSelector(
    selectPosts,
    posts => posts.posts.find(post=>{
        return post.userId===id
    })
);
