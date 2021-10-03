import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TodoService } from '../../services';
import * as todoActions from '../actions';

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private userService: TodoService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.loadTodos),
      exhaustMap(() =>
        this.userService.loadTodos().pipe(
          map(todos => todoActions.loadTodosSuccess({todos})),
          catchError((error: any) => of(todoActions.loadTodosFailure(error))))
      )
    )
  );

}
