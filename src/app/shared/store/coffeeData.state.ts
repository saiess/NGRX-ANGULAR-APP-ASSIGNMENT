import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CoffeeListRepresentation, CoffeeModel } from '../models/coffeeListRepresentation';

export const coffeeDataAdapter: EntityAdapter<CoffeeListRepresentation> = createEntityAdapter < CoffeeListRepresentation>();

export const CoffeeDataState: CoffeeModel = coffeeDataAdapter.getInitialState({
  loading: false,
  error: null,
});