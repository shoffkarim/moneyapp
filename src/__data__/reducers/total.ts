import { SET_TOTAL, InitStateTotal } from '../constants'
import { AnyAction } from "redux"


const Total = (state = InitStateTotal, action: AnyAction ) => {
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
}

export default Total