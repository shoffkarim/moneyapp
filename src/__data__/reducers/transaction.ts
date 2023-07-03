import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  idFrom: '',
  typeFrom: "",
  idTo: '',
  typeTo: "",
  value: "0",
  date: new Date(),
  comment: "",
  tags: [],
  open: false,
  status: "new",
  transactionId: ''
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
    closeTransactionPopup: (state) => state = initialState
  },
})

export const {
  setTransaction,
  setTransactionStart,
  setTransactionCardIDFrom,
  setTransactionCardIDTo,
  setTransactionCardTypeFrom,
  setTransactionCardTypeTo,
  closeTransactionPopup
} = transaction.actions


export default transaction.reducer