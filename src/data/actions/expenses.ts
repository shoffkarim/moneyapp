import Axios from "axios";
import { AppDispatch } from "data/store";

export const setExpenses = (user: any) => ({
  type: "SET_EXPENSES",
  payload: user
});

export const fetchExpenses = () => (dispatch: AppDispatch) => {
  Axios.get(`http://localhost:3001/expenses`)
  .then(({data}) =>
  dispatch(setExpenses(data)));
};