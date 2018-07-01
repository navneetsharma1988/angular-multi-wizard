import { Action } from '@ngrx/store';

import { Personal } from '../personal/personal.model';
import { Address } from '../address/address.model';

export const UPDATE_PERSONAL = 'UPDATE_PERSONAL';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const UPDATE_WORK = 'UPDATE_WORK';

export class UpdatePersonal implements Action {
  readonly type = UPDATE_PERSONAL;

  constructor(public payload: Personal) {}
}

export class UpdateAddress implements Action {
  readonly type = UPDATE_ADDRESS;

  constructor(public payload: Address) {}
}

export class UpdateWork implements Action {
  readonly type = UPDATE_WORK;

  constructor(public payload: string) {}
  
}

export type AppActions = UpdatePersonal | UpdateAddress | UpdateWork;