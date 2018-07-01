import { ActionReducerMap } from '@ngrx/store';

import * as fromMultiWizard from '../multi-wizard/store/multi-wizard.reducers';
import * as fromProgress from '../progress/store/progress.reducers';

export interface AppState {
  multiWizard: fromMultiWizard.State,
  progress: fromProgress.State
}

export const reducers: ActionReducerMap<AppState> = {
  multiWizard: fromMultiWizard.multiWizardReducer,
  progress: fromProgress.progressReducer
};