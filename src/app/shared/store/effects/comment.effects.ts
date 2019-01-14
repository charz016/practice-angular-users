import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromComment from '../actions/comments.actions'
import { CommentsService } from '../../services/comments.service';
import { Comments } from '../../models/comment.model';


@Injectable()
export class CommentEffects {
    constructor(private commentService: CommentsService, private actions$: Actions) { }

    @Effect()
    post$: Observable<Action> = this.actions$.pipe(
        ofType(fromComment.ActionTypes.GetComments),
        mergeMap((action: any) =>
            this.commentService.getByIdPost(action.payload).pipe(
                // If successful, dispatch success action with result
                map((data: Comments[]) => (new fromComment.GetCommentsSuccess(data))),
                // If request fails, dispatch failed action
                catchError((error) => of(new fromComment.GetCommentsError(error)))
            )
        )
    );
}