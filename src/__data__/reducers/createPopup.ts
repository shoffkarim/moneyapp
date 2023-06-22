import { createSlice } from "@reduxjs/toolkit"


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


export default createPopup.reducer