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
    setTransactionCardTypeFrom: (state, action) => { state.typeFrom = action.payload },
    setTransactionCardTypeTo: (state, action) => { state.typeTo = action.payload },
    setTransactionValue: (state, action) => { state.value = action.payload },
    setTransactionDate: (state, action) => { state.date = action.payload },
    setTransactionComment: (state, action) => { state.comment = action.payload },
    setTransactionTags: (state, action) => { state.tags = action.payload },
  },
})

export const {
  setTransaction,
  setTransactionStart,
  setTransactionCardIDFrom,
  setTransactionCardIDTo,
  setTransactionCardTypeFrom,
  setTransactionCardTypeTo,
  setTransactionValue,
  setTransactionDate,
  setTransactionComment,
  setTransactionTags
} = transaction.actions

export const selectTransaction = (state: RootState) => state

export default transaction.reducer