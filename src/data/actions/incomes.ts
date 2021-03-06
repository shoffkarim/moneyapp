import { SET_INCOMES } from './../constants';
import Axios from "axios";
import { AppDispatch } from "data/store";

export const setIncomes = (user: any) => ({
  type: SET_INCOMES,
  payload: user
});

export const fetchIncomes = () => (dispatch: AppDispatch) => {
  Axios.get(`http://localhost:3001/incomes`)
  .then(({data}) =>
  dispatch(setIncomes(data)));
};