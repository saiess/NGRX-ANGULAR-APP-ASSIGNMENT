import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AssignmentService } from '../assignment.service';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import * as DataActions from './coffeeData.actions';

@Injectable()
export class CoffeeEffects {
  constructor(private action$: Actions, private service: AssignmentService) {}

  getData$ = createEffect(() => {
    return this.action$.pipe(
      ofType(DataActions.loadCoffee),
      mergeMap(() => {
        return this.service.getCoffeeList().pipe(
          map((data) => {
            return DataActions.loadCoffeeSuccess({ coffeeList: data });
          }),
          catchError((error) => of(DataActions.loadCoffeeFailure({ error })))
        );
      })
    );
  });
}
