import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "__data__/store"

const initialState = {
  idFrom: 0,
  typeFrom: "",
  idTo: 0,
  typeTo: "",
  value: 0,
  date: "",
  comment: "",
  tags: [],
}

const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransaction: (state, action) => state = action.payload,
    setTransactionStart: (state, action) => {
      return state = {
        ...state,
        ...action.payload
      }
    },
    setTransactionCardIDFrom: (state, action) => { state.idFrom = action.payload },
    setTransactionCardIDTo: (state, action) => { state.idTo = action.payload },
  },
})

export const {
  setTransaction,
  setTransactionStart,
  setTransactionCardIDFrom,
  setTransactionCardIDTo,
} = transaction.actions

export const selectTransaction = (state: RootState) => state.transaction

export default transaction.reducer