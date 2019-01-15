import { ActionReducerMap } from "@ngrx/store";
import * as UsersReducer from './users.reducer'
import * as PostReducer from './posts.reducer'
import * as CommentReducer from './comments.reducer'




export interface AppState {
    users: UsersReducer.State,
    posts: PostReducer.State,
    comments: CommentReducer.State
}

export const reducers: ActionReducerMap<AppState> = {
    users: UsersReducer.UsersReducer,
    posts: PostReducer.PostReducer,
    comments: CommentReducer.CommentReducer
}