import { SET_USER } from './../constants';
import { AnyAction } from "redux";
const InitState = {
  user: {},
  isLoaded: false
}

const User = (state = InitState, action: AnyAction ) => {
  switch(action.type){
    case SET_USER :
      return {
        ...state,
        user: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default User;