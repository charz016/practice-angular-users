import { AppState } from "../reducers";
import { createSelector } from "@ngrx/store";
import { commentAdapter } from '../reducers/comments.reducer';


export const selectCommentsState = (state: AppState) => state.comments;

export const selectCommentsEntities = createSelector(
    selectCommentsState,
    commentAdapter.getSelectors().selectEntities
);
export const selectAllComments = createSelector(
    selectCommentsState,
    commentAdapter.getSelectors().selectAll
);

export const selectCurrentComment = createSelector(
    selectCommentsEntities,
    (commentsEntities, props) => commentsEntities[props.id]
);