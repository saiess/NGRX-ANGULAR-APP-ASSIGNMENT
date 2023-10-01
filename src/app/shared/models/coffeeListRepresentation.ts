import { EntityState } from "@ngrx/entity";

export class CoffeeListRepresentation {
  id: number = 0;
  uid: string = '';
  blend_name: string = '';
  origin: string = '';
  variety: string = '';
  notes: string = '';
  intensifier: string = '';
}


export interface CoffeeModel extends EntityState<CoffeeListRepresentation> {
  loading: boolean;
  error: any;
}
