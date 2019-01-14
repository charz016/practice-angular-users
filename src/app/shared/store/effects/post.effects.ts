import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromPost from '../actions/posts.actions'
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';


@Injectable()
export class PostEffects {
    constructor(private postService: PostsService, private actions$: Actions) { }

    @Effect()
    post$: Observable<Action> = this.actions$.pipe(
        ofType(fromPost.ActionTypes.GetAllPosts),
        mergeMap((action: any) =>
            this.postService.getByIdUser(action.payload).pipe(
                // If successful, dispatch success action with result
                map((data: Post[]) => (new fromPost.GetPostsSuccess(data))),
                // If request fails, dispatch failed action
                catchError((error) => of(new fromPost.GetPostsError(error)))
            )
        )
    );
}