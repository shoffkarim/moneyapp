import { combineReducers, configureStore } from '@reduxjs/toolkit'
import transaction from './reducers/transaction'
import createPopup from './reducers/createPopup'
import editPopup from './reducers/editPopup'
import alerts from './reducers/alerts'
import calendarDayPopup from './reducers/calendarDayPopup'

const reducer = combineReducers({
  transaction: transaction,
  createPopup: createPopup,
  editPopup: editPopup,
  alerts: alerts,
  calendarDayPopup: calendarDayPopup
})

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch