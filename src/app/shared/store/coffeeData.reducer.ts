import { createReducer, on } from '@ngrx/store';
import { coffeeDataAdapter, CoffeeDataState } from './coffeeData.state'
import * as DataActions from './coffeeData.actions'


export const coffeeReducer = createReducer(
  CoffeeDataState,
  on(DataActions.loadCoffee, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(DataActions.loadCoffeeSuccess, (state, { coffeeList }) =>
    coffeeDataAdapter.setAll(coffeeList, { ...state, loading: false })
  ),

  on(DataActions.loadCoffeeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
