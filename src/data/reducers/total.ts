import { SET_TOTAL } from './../constants';
import { AnyAction } from "redux";
const InitState = {
  total: {},
  isLoaded: false
}

const Total = (state = InitState, action: AnyAction ) => {
  switch(action.type){
    case SET_TOTAL :
      return {
        ...state,
        total: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default Total;