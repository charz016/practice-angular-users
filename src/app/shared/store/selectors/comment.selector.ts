import { AppState } from "../reducers";
import { createSelector } from "@ngrx/store";


export const selectComments = (state: AppState) => state.comments;

export const selectCommentByPost = createSelector(
    selectComments,
    state => state.comments
);


