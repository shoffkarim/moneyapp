import Axios from "axios";
import { SET_HISTORY } from "__data__/constants";
import { AppDispatch } from "__data__/store";

export const setIncomes = (history: any) => ({
  type: SET_HISTORY,
  payload: history
});


export const fetchHistory = () => (dispatch: AppDispatch) => {
  Axios.get(`http://localhost:3001/transactions`)
  .then(({data}) => {
    dispatch(setIncomes(data));
  })
};