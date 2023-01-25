import { SET_ACCOUNTS, InitState } from '../constants';
import { AnyAction } from "redux";

const Accounts = (state = InitState, action: AnyAction ) => {
  switch(action.type){
    case SET_ACCOUNTS :
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default Accounts;