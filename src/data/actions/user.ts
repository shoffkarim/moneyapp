import Axios from "axios";
import { AppDispatch } from "data/store";

export const setUser = (user: any) => ({
  type: "SET_USER",
  payload: user
});

export const fetchUser = () => (dispatch: AppDispatch) => {
  Axios.get(`http://localhost:3001/user`)
  .then(({data}) =>
  dispatch(setUser(data)));
};