import { Action } from '@ngrx/store';
import { User } from '../../models/user.model'



export enum ActionTypes {
    GetAllUsers = '[Users] GetAllUsers',
    GetSucessUsers = '[Users] GetSucessUsers',
    GetErrorUsers = '[Users] GetErrorUsers',
}

export class GetAllUsers implements Action {
    readonly type = ActionTypes.GetAllUsers;
}

export class GetSucessUsers implements Action {
    readonly type = ActionTypes.GetSucessUsers;

    constructor(public payload: User[]) {

    }
}

export class GetErrorUsers implements Action {
    readonly type = ActionTypes.GetErrorUsers;
    constructor(public payload) {

    }

}

export type ActionsUnion =
    | GetAllUsers
    | GetSucessUsers
    | GetErrorUsers;