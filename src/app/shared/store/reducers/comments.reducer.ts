import * as fromComment from '../actions/comments.actions';
import { Comments } from '../../models/comment.model';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface State extends EntityState<Comments> {
    selectedCommentId: number | null
    loading: boolean,
    error: any,

};

export const commentAdapter: EntityAdapter<Comments> = createEntityAdapter<Comments>();

const initialState: State = commentAdapter.getInitialState({
    selectedCommentId: null,
    loading: false,
    error: null,
})



export function CommentReducer(state: State = initialState, action: fromComment.ActionsUnions): State {
    switch (action.type) {
        case fromComment.ActionTypes.GetComments: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case fromComment.ActionTypes.GetCommentsSuccess: {
            return commentAdapter.addAll(action.payload, {
                ...state,
                loading: false
            });
        }
        case fromComment.ActionTypes.GetCommentsError: {
            return {
                ...state,
                entities: {},
                loading: false,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}