import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "__data__/store"

const initialState = {
  open: false,
  type: ''
}

const createPopup = createSlice({
  name: 'createPopup',
  initialState,
  reducers: {
    openCreatePopup: (state, action) => state = action.payload,
    closeCreatePoup: (state) => {
      state.open = false
      state.type = ''
    }
  },
})

export const {
  openCreatePopup,
  closeCreatePoup,
} = createPopup.actions

export const selectCreatePopup = (state: RootState) => state.createPopup

export default createPopup.reducer