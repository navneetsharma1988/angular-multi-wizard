import { Action } from '@ngrx/store';

export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';

export class UpdateProgress implements Action {
  readonly type = UPDATE_PROGRESS;

  constructor(public payload: number) {}
}

export type ProgessActions = UpdateProgress;