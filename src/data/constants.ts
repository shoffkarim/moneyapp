export const SET_USER = "SET_USER"
export const SET_INCOMES = "SET_INCOMES"
export const SET_ACCOUNTS = "SET_ACCOUNTS"
export const SET_EXPENSES = "SET_EXPENSES"
export const SET_TOTAL = "SET_TOTAL"
export const SET_TRANSACTION = "SET_TRANSACTION"
export const OPEN_POPUP_TRANSACTION = "OPEN_POPUP_TRANSACTION"
export const CLOSE_POPUP_TRANSACTION = "CLOSE_POPUP_TRANSACTION"
export const SET_CARD_ID_FROM = "SET_CARD_ID_FROM"
export const SET_CARD_ID_WHERE = "SET_CARD_ID_WHERE"
export const SET_TRANSACTION_VALUE = "SET_TRANSACTION_VALUE"
export const SET_TRANSACTION_DATE = "SET_TRANSACTION_DATE"
export const SET_TRANSACTION_COMMENT = "SET_TRANSACTION_COMMENT"
export const SET_TRANSACTION_TAGS = "SET_TRANSACTION_TAGS"
export const SET_TRANSACTION_DATA = "SET_TRANSACTION_DATA"

export const InitState = {
  items: [],
  isLoaded: false
}

export const InitStateTotal = {
  total: {},
  isLoaded: false
}

export const InitStateUser = {
  user: {},
  isLoaded: false
}

export const InitStateTransaction = {
  idFrom: 0,
  typeFrom: "",
  idWhere: 0,
  typeWhere: "",
  value: 0,
  date: "",
  comment: "",
  tags: [],
  isLoaded: false,
  open: false
}