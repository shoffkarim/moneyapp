import { SET_ACCOUNTS } from './../constants';
import { AnyAction } from "redux";
const InitState = {
  accounts: {},
  isLoaded: false
}

const Accounts = (state = InitState, action: AnyAction ) => {
  switch(action.type){
    case SET_ACCOUNTS :
      return {
        ...state,
        accounts: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default Accounts;