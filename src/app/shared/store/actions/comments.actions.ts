import { Action } from '@ngrx/store';
import { Comments } from '../../models/comment.model';

export enum ActionTypes {
    GetComments = '[Comments] GetComments',
    GetCommentsSuccess = '[Comments] GetCommentsSuccess',
    GetCommentsError = '[Comments] GetCommentsErrors'
};


export class GetComments implements Action {
    readonly type = ActionTypes.GetComments;

    constructor(public payload: any) { }
}

export class GetCommentsSuccess implements Action {
    readonly type = ActionTypes.GetCommentsSuccess;

    constructor(public payload: Comments[]) { }
}

export class GetCommentsError implements Action {
    readonly type = ActionTypes.GetCommentsError;

    constructor(public payload: any) { }
}


export type ActionsUnions
    = GetComments
    | GetCommentsSuccess
    | GetCommentsError
