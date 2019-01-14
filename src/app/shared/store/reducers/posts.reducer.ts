import * as fromPosts from '../actions/posts.actions';
import { Post } from '../../models/post.model';

export interface State {
    loading: boolean;
    posts: Post[];
    error: any;

};

const initialState: State = {
    loading: false,
    posts: null,
    error: null
};

export function PostReducer(state: State = initialState, action: fromPosts.ActionsUnions): State {
    switch (action.type) {
        case fromPosts.ActionTypes.GetAllPosts: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        case fromPosts.ActionTypes.GetPostsSuccess: {
            return {
                ...state,
                loading: false,
                posts: action.payload
            };
        }

        case fromPosts.ActionTypes.GetPostsError: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}