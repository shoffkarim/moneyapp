import { InitState, SET_HISTORY } from '../constants';
import { AnyAction } from "redux";

const History = (state = InitState, action: AnyAction ) => {
  switch(action.type){
    case SET_HISTORY :
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default History;