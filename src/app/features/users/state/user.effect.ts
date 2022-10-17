import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import * as actions from './user.action';

@Injectable()
export class UserEffects {

    loadUsers$ = createEffect(() => this.actions$
        .pipe(
            ofType(actions.FETCH_USERS),
            mergeMap(() => {
                return this.userService.getAll()
                    .pipe(
                        map((users: User[]) => {
                            return ({ type: actions.LOAD_USERS, users });
                        }),
                        catchError(() => EMPTY)
                    );
            }
            ),
            catchError(() => {
                return EMPTY;
            })
        )
    );

    constructor (
        private readonly actions$: Actions,
        private readonly userService: UserService
    ) { }
}
