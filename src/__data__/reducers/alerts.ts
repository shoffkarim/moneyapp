import { createSlice } from "@reduxjs/toolkit"
import { ERROR, SUCCESS } from "components/constants"


const initialState = {
  open: false,
  text: '',
  type: ''
}

const alerts = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    openSuccessAlert: (state, action) => {
      state.open = action.payload.open
      state.text = action.payload.text
      state.type = SUCCESS
    },
    closeSuccessAlert: (state) => {
      state.open = false
      state.text = ''
      state.type = ''
    },
    openErrorAlert: (state, action) => {
      state.open = action.payload.open
      state.text = action.payload.text
      state.type = ERROR
    },
    closeErrorAlert: (state) => {
      state.open = false
      state.text = ''
      state.type = ''
    }
  },
})

export const {
  openSuccessAlert,
  closeSuccessAlert,
} = alerts.actions


export default alerts.reducer