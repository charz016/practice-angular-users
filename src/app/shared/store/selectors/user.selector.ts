import { AppState } from "../reducers";
import { userAdapter } from '../reducers/users.reducer';
import { createSelector } from '@ngrx/store';


export const selectUserState = (state: AppState) => state.users;

export const selectUsersEntities = createSelector(
    selectUserState,
    userAdapter.getSelectors().selectEntities
);
export const selectAllUsers = createSelector(
    selectUserState,
    userAdapter.getSelectors().selectAll
);

export const selectCurrentUser = createSelector(
    selectUsersEntities,
    (usersEntities, props) => usersEntities[props.id]
);