import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coffeeDataAdapter } from './coffeeData.state';
import { CoffeeModel } from '../models/coffeeListRepresentation';

export const selectDataState = createFeatureSelector<CoffeeModel>('coffee data');

const coffeeSelector = coffeeDataAdapter.getSelectors();

export const selectCoffeData = createSelector(
  selectDataState,
  coffeeSelector.selectAll
);

export const selectLoading = createSelector(selectDataState, (state) => state.loading);

export const selectError = createSelector(selectDataState, (state) => state.error);