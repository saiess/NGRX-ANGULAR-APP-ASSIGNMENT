import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../shared/assignment.service';
import {
  CoffeeListRepresentation,
  CoffeeModel,
} from '../shared/models/coffeeListRepresentation';
// import { CoffeeModel } from '../shared/store/coffeeData.model';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectCoffeData,
  selectError,
  selectLoading,
} from '../shared/store/coffeeData.selectors';
import * as DataActions from '../shared/store/coffeeData.actions';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {
  coffeList$: Observable<CoffeeListRepresentation[]> = of([]);
  coffeList: CoffeeListRepresentation[] = [];
  loading$: Observable<boolean> = of(false);
  error$: Observable<any> = of();
  numberOfItems: number = 6;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(DataActions.loadCoffee());

    this.coffeList$ = this.store.select(selectCoffeData);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    this.store.select(selectCoffeData).subscribe((res) => {
      if (res) {
        this.coffeList = res;
      }
    });
  }

  showMoreItems = () => {
    this.numberOfItems += 6;
  };
}
