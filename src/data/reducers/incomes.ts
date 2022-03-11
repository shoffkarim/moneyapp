import { AnyAction } from "redux";
const InitState = {
  incomes: {},
  isLoaded: false
}

const Incomes = (state = InitState, action: AnyAction ) => {
  switch(action.type){
    case "SET_INCOMES" :
      return {
        ...state,
        incomes: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default Incomes;