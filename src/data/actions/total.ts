import Axios from "axios";
import { AppDispatch } from "data/store";

export const setTotal = (user: any) => ({
  type: "SET_TOTAL",
  payload: user
});

export const fetchTotal = () => (dispatch: AppDispatch) => {
  Axios.get(`http://localhost:3001/total`)
  .then(({data}) =>
  dispatch(setTotal(data)));
};