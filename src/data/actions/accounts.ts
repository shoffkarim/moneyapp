import Axios from "axios";
import { AppDispatch } from "data/store";

export const setAccounts = (user: any) => ({
  type: "SET_ACCOUNTS",
  payload: user
});

export const fetchAccounts = () => (dispatch: AppDispatch) => {
  Axios.get(`http://localhost:3001/accounts`)
  .then(({data}) =>
  dispatch(setAccounts(data)));
};