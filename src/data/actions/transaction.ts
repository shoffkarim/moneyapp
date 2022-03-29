import { CLOSE_POPUP_TRANSACTION, OPEN_POPUP_TRANSACTION, SET_TRANSACTION } from './../constants';

export const setTransaction = (item: any) => ({
  type: SET_TRANSACTION,
  payload: item
});

export const openPopupTransaction = (open: boolean) => ({
  type: OPEN_POPUP_TRANSACTION,
  payload: open
})

export const closePopupTransaction = (close: boolean) => ({
  type: CLOSE_POPUP_TRANSACTION,
  payload: close
})