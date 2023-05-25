import { SET_USER } from '../constants'
import Axios from "axios"
import { AppDispatch } from "__data__/store"

export const setUser = (user: unknown) => ({
  type: SET_USER,
  payload: user
})

export const fetchUser = () => (dispatch: AppDispatch) => {
  Axios.get(`http://localhost:3001/user`)
    .then(({ data }) =>
      dispatch(setUser(data)))
}