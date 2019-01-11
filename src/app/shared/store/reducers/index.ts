import { ActionReducerMap } from "@ngrx/store";
import * as listUsersReducer from './list-users.reducer'
import * as UserReducer from './user.reducer'



export interface AppState {
    usersList: listUsersReducer.State,
    user: UserReducer.State,

}

export const reducers: ActionReducerMap<AppState> = {
    usersList: listUsersReducer.ListUSersReducer,
    user: UserReducer.UsersReducer

}