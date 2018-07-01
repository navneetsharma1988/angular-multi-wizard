import * as ProgressActions from './progress.actions';

export interface State {
  progress: number;
}


const initialState: State = {
  progress: 0
};

export function progressReducer(state = initialState, action) {
  switch (action.type) {
    case ProgressActions.UPDATE_PROGRESS:
      return {
        ...state,
        progress: action.payload
      };
    default:
      return state;    
  }
}
