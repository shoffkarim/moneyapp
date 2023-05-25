import { SET_EXPENSES } from '../constants'
import Axios from "axios"
import { AppDispatch } from "__data__/store"

export const setExpenses = (user: unknown) => ({
  type: SET_EXPENSES,
  payload: user
})

export const fetchExpenses = () => (dispatch: AppDispatch) => {
  Axios.get(`http://localhost:3001/expenses`)
    .then(({ data }) =>
      dispatch(setExpenses(data)))
}