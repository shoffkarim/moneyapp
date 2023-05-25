import { SET_ACCOUNTS } from '../constants'
import Axios from "axios"
import { AppDispatch } from "__data__/store"

export const setAccounts = (user: unknown) => ({
  type: SET_ACCOUNTS,
  payload: user
})

export const fetchAccounts = () => (dispatch: AppDispatch) => {
  Axios.get(`http://localhost:3001/accounts`)
  .then(({ data }) =>
  dispatch(setAccounts(data)))
}