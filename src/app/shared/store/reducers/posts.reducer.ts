import * as fromPosts from '../actions/posts.actions';
import { Post } from '../../models/post.model';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface State extends EntityState<Post> {
    selectedPostId: number | null
    loading: boolean;
    error: any;
};

export const postAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

const initialState: State = postAdapter.getInitialState({
    selectedPostId: null,
    loading: false,
    error: null
});

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
            return postAdapter.addAll(action.payload, {
                ...state,
                loading: false
            });
        }

        case fromPosts.ActionTypes.GetPostsError: {
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
