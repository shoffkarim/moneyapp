import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  idFrom: '',
  typeFrom: "",
  idTo: '',
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
    setTransactionCardTypeFrom: (state, action) => { state.typeFrom = action.payload },
    setTransactionCardTypeTo: (state, action) => { state.typeTo = action.payload },
  },
})

export const {
  setTransaction,
  setTransactionStart,
  setTransactionCardIDFrom,
  setTransactionCardIDTo,
  setTransactionCardTypeFrom,
  setTransactionCardTypeTo
} = transaction.actions


export default transaction.reducer