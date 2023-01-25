import { SET_EXPENSES, InitState } from '../constants';
import { AnyAction } from "redux";

const Expenses = (state = InitState, action: AnyAction ) => {
  switch(action.type){
    case SET_EXPENSES :
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default Expenses;