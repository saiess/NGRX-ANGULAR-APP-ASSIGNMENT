import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoffeeListRepresentation } from './models/coffeeListRepresentation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService {
  url = 'https://random-data-api.com/api/coffee/random_coffee?size=12';

  constructor(private http: HttpClient) {}

  getCoffeeList = (): Observable<CoffeeListRepresentation[]> => {
    return this.http.get<CoffeeListRepresentation[]>(this.url);
  };
}
