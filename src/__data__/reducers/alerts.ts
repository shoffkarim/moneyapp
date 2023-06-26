import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  open: false,
  text: ''
}

const successAlert = createSlice({
  name: 'createAlert',
  initialState,
  reducers: {
    openSuccessAlert: (state, action) => state = action.payload,
    closeSuccessAlert: (state) => {
      state.open = false
      state.text = ''
    }
  },
})

export const {
  openSuccessAlert,
  closeSuccessAlert,
} = successAlert.actions


export default successAlert.reducer