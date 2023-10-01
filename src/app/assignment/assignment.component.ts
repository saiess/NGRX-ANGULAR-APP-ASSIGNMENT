import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {CoffeeListRepresentation} from '../shared/models/coffeeListRepresentation';
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
export class AssignmentComponent implements OnInit, AfterViewInit {
  coffeList$: Observable<CoffeeListRepresentation[]> = of([]);
  coffeList: CoffeeListRepresentation[] = [];
  loading$: Observable<boolean> = of(false);
  error$: Observable<any> = of();
  numberOfItems: number = 6;
  showAsTable: boolean = false;

  displayedColumns: string[] = [
    'blend_name',
    'origin',
    'variety',
    'notes',
    'intensifier',
  ];
  dataSource = new MatTableDataSource<CoffeeListRepresentation>(this.coffeList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(DataActions.loadCoffee());
    this.coffeList$ = this.store.select(selectCoffeData);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    this.coffeList$.subscribe((res) => {
      if (res) {
        this.coffeList = res;
        this.dataSource.data = res;
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  showMoreItems = () => {
    this.numberOfItems += 6;
  };

  showTable = () => {
    this.showAsTable = !this.showAsTable;
  };
}
