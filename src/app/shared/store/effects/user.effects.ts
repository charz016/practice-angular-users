import { Injectable } from "@angular/core";
import { UsersService } from "../../services/users.service";
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromUser from '../actions/users.actions'
import { User } from '../../models/user.model';


@Injectable()
export class Userffects {
    constructor(private userService: UsersService, private actions$: Actions) { }

    @Effect()
    user$: Observable<Action> = this.actions$.pipe(
        ofType(fromUser.ActionTypes.GetAllUsers),
        mergeMap(action =>
            this.userService.getALL().pipe(
                // If successful, dispatch success action with result
                map((data: User[]) => (new fromUser.GetSucessUsers(data))),
                // If request fails, dispatch failed action
                catchError((error) => of(new fromUser.GetErrorUsers(error)))
            )
        )
    );
}