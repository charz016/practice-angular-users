import * as fromUser from '../actions/users.actions'
import { User } from '../../models/user.model';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';


export interface State extends EntityState<User> {
    selectedUserId: number | null
    loading: boolean;
    error: any;
};

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = userAdapter.getInitialState({
    selectedUserId: null,
    loading: false,
    error: null

});


export function UsersReducer(state: State = initialState, actions: fromUser.ActionsUnion): State {
    switch (actions.type) {
        case fromUser.ActionTypes.GetAllUsers: {
            return {
                ...state,
                error: null,
                loading: true
            };
        }
        case fromUser.ActionTypes.GetSucessUsers: {
            return userAdapter.addAll(actions.payload, {
                ...state,
                loading: false
            });
        }

        case fromUser.ActionTypes.GetErrorUsers: {
            return {
                ...state,
                entities: {},
                loading: false,
                error: actions.payload
            };
        }

        default: {
            return state;
        }
    }
}