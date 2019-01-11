import { AppState } from "../reducers";
import { createSelector } from "@ngrx/store";
import { selectAllUsers } from "./user.selector";

export const selectUsersList = (state: AppState) => state.usersList;

export const selectUsersIds = createSelector(
    selectUsersList,
    state => state.ids ? state.ids : null
);

export const selectUsers = createSelector(
    selectAllUsers,
    selectUsersIds,
    (user, ids) => {
        return ids ? ids.map(id => user[id]) : null
    }
);

export const selectUserById = (id) => createSelector(
    selectUsers,
    (user) => {
        return user[id];
    }
);