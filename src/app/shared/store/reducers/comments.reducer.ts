import * as fromComment from '../actions/comments.actions';
import { Comments } from '../../models/comment.model';

export interface State {
    loading: boolean,
    comments: Comments[],
    error: any,

};

const initialState: State = {
    loading: false,
    comments: null,
    error: null,
};

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
            return {
                ...state,
                loading: false,
                comments:action.payload
            };
        }

        case fromComment.ActionTypes.GetCommentsError: {
            return {
                ...state,
                loading: false,
                error:action.payload
            };
        }

        default: {
            return state;
        }
    }
}