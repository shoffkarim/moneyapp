import { SET_USER, InitStateUser } from './../constants';
import { AnyAction } from "redux";

const User = (state = InitStateUser, action: AnyAction ) => {
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