import { createAction, props } from '@ngrx/store';
import { CoffeeListRepresentation } from '../models/coffeeListRepresentation';

export const LOAD_COFFEE = '[CoffeeListRepresentation] load coffee data';
export const LOAD_COFFEE_SUCCESS = '[CoffeeListRepresentation] load coffee data success';
export const LOAD_COFFEE_FAILURE = '[CoffeeListRepresentation] load coffee data failure';

export const loadCoffee = createAction(LOAD_COFFEE);

export const loadCoffeeSuccess = createAction(
  LOAD_COFFEE_SUCCESS,
  props<{ coffeeList: CoffeeListRepresentation[] }>()
);

export const loadCoffeeFailure = createAction(
  LOAD_COFFEE_FAILURE,
  props<{ error: any }>()
);