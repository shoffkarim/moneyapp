import {
  CLOSE_POPUP_TRANSACTION,
  InitStateTransaction,
  OPEN_POPUP_TRANSACTION,
  SET_CARD_ID_FROM,
  SET_CARD_ID_WHERE,
  SET_TRANSACTION,
  SET_TRANSACTION_DATA,
  SET_TRANSACTION_VALUE,
} from "__data__/constants"
import { AnyAction } from "redux"

const Transaction = (state = InitStateTransaction, action: AnyAction) => {
  switch (action.type) {
  case SET_TRANSACTION:
    return {
      ...state,
      ...action.payload,
      isLoaded: true,
    }
  case OPEN_POPUP_TRANSACTION:
    return {
      ...state,
      open: action.payload,
    }
  case CLOSE_POPUP_TRANSACTION:
    return {
      ...state,
      open: action.payload,
    }
  case SET_CARD_ID_FROM:
    return {
      ...state,
      idFrom: action.payload,
    }
  case SET_CARD_ID_WHERE:
    return {
      ...state,
      idWhere: action.payload,
    }
  case SET_TRANSACTION_VALUE:
    return {
      ...state,
      value: action.payload,
    }
  case SET_TRANSACTION_DATA:
    return {
      ...state,
      ...action.payload
    }
  default:
    return state
  }
}

export default Transaction
