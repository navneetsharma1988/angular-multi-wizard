import { ActionReducerMap } from "@ngrx/store";

import { Personal } from "../personal/personal.model";
import { Address } from "../address/address.model";
import * as MultiWizardActions from './multi-wizard.actions';

export interface State {
  personal: Personal;
  address: Address;
  work: string;
}

const initialPersonal = new Personal('', '');
const initialAddress = new Address('', '');

const initialState: State = {
  personal: initialPersonal,
  address: initialAddress,
  work: ''
};

export function multiWizardReducer(state = initialState, action) {
  switch (action.type) {
    case MultiWizardActions.UPDATE_PERSONAL:
      return {
        ...state,
        personal: {...action.payload}
      };
    case MultiWizardActions.UPDATE_ADDRESS:
      return {
        ...state,
        address: {...action.payload}
      };
    case MultiWizardActions.UPDATE_WORK:
      return {
        ...state,
        work: action.payload,
      }  
    default:
      return state;    
  }
}
