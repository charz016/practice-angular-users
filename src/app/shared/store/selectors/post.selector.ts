import { AppState } from "../reducers";
import { createSelector } from "@ngrx/store";
import { postAdapter } from '../reducers/posts.reducer';


export const selectPostState = (state: AppState) => state.posts;

export const selectPostsEntities = createSelector(
    selectPostState,
    postAdapter.getSelectors().selectEntities
);
export const selectAllPosts = createSelector(
    selectPostState,
    postAdapter.getSelectors().selectAll
);

export const selectCurrentPost = createSelector(
    selectPostsEntities,
    (postsEntities, props) => postsEntities[props.id]
);