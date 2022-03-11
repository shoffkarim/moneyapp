import { AnyAction } from "redux";
const InitState = {
  expenses: {},
  isLoaded: false
}

const Expenses = (state = InitState, action: AnyAction ) => {
  switch(action.type){
    case "SET_EXPENSES" :
      return {
        ...state,
        expenses: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
};

export default Expenses;