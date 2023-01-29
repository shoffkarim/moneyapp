import { SET_INCOMES, InitState } from '../constants';
import { AnyAction } from "redux";

const Incomes = (state = InitState, action: AnyAction ) => {
  switch(action.type){
    case SET_INCOMES :
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default Incomes;