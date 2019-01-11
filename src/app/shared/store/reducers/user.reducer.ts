import * as fromUser from '../actions/users.actions'
import { User } from '../../models/user.model';


export interface State {
    [ids: number]: User;

}

export const initialState: State = {};


export function UsersReducer(state: State = initialState, actions: fromUser.ActionsUnion): State {

    switch (actions.type) {
        case fromUser.ActionTypes.GetSucessUsers:
            return actions.payload.reduce((prev, curr) => ({ ...prev, [curr.id]: curr }), state);
        default:
            return state;
    }

}