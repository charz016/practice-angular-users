import { Action } from '@ngrx/store';
import { Post } from '../../models/post.model';

export enum ActionTypes {
    GetAllPosts = '[Posts] GetAllPost',
    GetPostsSuccess = '[Posts] GetPostsSuccess',
    GetPostsError = '[Posts] GetPostsError'
};

export class GetAllPost implements Action {
    readonly type = ActionTypes.GetAllPosts;
    constructor(public payload:any) { }
}

export class GetPostsSuccess implements Action {
    readonly type = ActionTypes.GetPostsSuccess;

    constructor(public payload: Post[]) { }
}

export class GetPostsError implements Action {
    readonly type = ActionTypes.GetPostsError;

    constructor(public payload: any) { }
}


export type ActionsUnions
    = GetAllPost
    | GetPostsSuccess
    | GetPostsError;
