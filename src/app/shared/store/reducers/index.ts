import { ActionReducerMap } from "@ngrx/store";
import * as listUsersReducer from './list-users.reducer'
import * as UserReducer from './user.reducer'
import * as PostReducer from './posts.reducer'
import * as CommentReducer from './comments.reducer'




export interface AppState {
    usersList: listUsersReducer.State,
    user: UserReducer.State,
    posts: PostReducer.State,
    comments: CommentReducer.State
}

export const reducers: ActionReducerMap<AppState> = {
    usersList: listUsersReducer.ListUSersReducer,
    user: UserReducer.UsersReducer,
    posts: PostReducer.PostReducer,
    comments: CommentReducer.CommentReducer
}