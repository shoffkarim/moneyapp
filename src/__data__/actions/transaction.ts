import axios from "axios"
import { TransactionData } from "components/interfaces"
import {
  CLOSE_POPUP_TRANSACTION,
  OPEN_POPUP_TRANSACTION,
  SET_TRANSACTION,
  SET_CARD_ID_FROM,
  SET_CARD_ID_WHERE,
  SET_TRANSACTION_VALUE,
  SET_TRANSACTION_DATA,
} from "../constants"

export const setTransaction = (item: unknown) => ({
  type: SET_TRANSACTION,
  payload: item,
})

export const openPopupTransaction = (open: boolean) => ({
  type: OPEN_POPUP_TRANSACTION,
  payload: open,
})

export const closePopupTransaction = (close: boolean) => ({
  type: CLOSE_POPUP_TRANSACTION,
  payload: close,
})

export const setCardIdFrom = (id: number) => ({
  type: SET_CARD_ID_FROM,
  payload: id,
})

export const setCardIdWhere = (id: number) => ({
  type: SET_CARD_ID_WHERE,
  payload: id,
})

export const setTransactionValue = (value: number) => ({
  type: SET_TRANSACTION_VALUE,
  payload: value
})

export const setTransactionData = (data: TransactionData) => ({
  type: SET_TRANSACTION_DATA,
  payload: data
})

export const addNewTransaction = (item: string) => {
  axios.post(`http://localhost:3001/transactions`, JSON.parse(item))
    .then(() => {
      console.log("success")
    })
    .catch(error => {console.error('There was an error!', error)
    })
}