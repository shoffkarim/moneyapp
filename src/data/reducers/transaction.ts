import {
  InitStateTransaction,
  OPEN_POPUP_TRANSACTION,
  SET_TRANSACTION,
} from "data/constants";
import { AnyAction } from "redux";

const Transaction = (state = InitStateTransaction, action: AnyAction) => {
  switch (action.type) {
    case SET_TRANSACTION:
      return {
        ...state,
        item: action.payload,
        isLoaded: true,
      };
    case OPEN_POPUP_TRANSACTION:
      return {
        ...state,
        open: action.payload
      };
    default:
      return state;
  }
};

export default Transaction;
