import * as fromUser from '../actions/users.actions'
import { User } from '../../models/user.model';


export interface State {
    // is loading?
    loading: boolean;
    //ids users
    ids: number[];
    // error message
    error: any;
}

export const initialState: State = {
    loading: false,
    ids: null,
    error: null
};

export function ListUSersReducer(state: State = initialState, actions: fromUser.ActionsUnion): State {
    switch (actions.type) {
        case fromUser.ActionTypes.GetAllUsers:
            return {
                ...state,
                error: null,
                loading: true
            }
        case fromUser.ActionTypes.GetSucessUsers:
            return {
                ...state,
                loading: false,
                ids: actions.payload.map((user:User) => user.id)

            }

        case fromUser.ActionTypes.GetErrorUsers:
            return {
                ...state,
                loading: false,
                error: actions.payload
            }

    }
}