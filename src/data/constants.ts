export const SET_USER = "SET_USER"
export const SET_INCOMES = "SET_INCOMES"
export const SET_ACCOUNTS = "SET_ACCOUNTS"
export const SET_EXPENSES = "SET_EXPENSES"
export const SET_TOTAL = "SET_TOTAL"
export const SET_TRANSACTION = "SET_TRANSACTION"
export const OPEN_POPUP_TRANSACTION = "OPEN_POPUP_TRANSACTION"
export const CLOSE_POPUP_TRANSACTION = "CLOSE_POPUP_TRANSACTION"

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
  item: {
    idFrom: 0,
    typeFrom: "",
    idWhere: 0,
    typeWhere: "",
    isLoaded: false,
  },
  open: false
}