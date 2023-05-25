import { SET_TOTAL } from '../constants'
import Axios from "axios"
import { AppDispatch } from "__data__/store"

export const setTotal = (user: unknown) => ({
  type: SET_TOTAL,
  payload: user
})

export const fetchTotal = () => (dispatch: AppDispatch) => {
  Axios.get(`http://localhost:3001/total`)
    .then(({ data }) =>
      dispatch(setTotal(data)))
}