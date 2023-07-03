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
    openErrorAlert: (state, action) => {
      state.open = action.payload.open
      state.text = action.payload.text
      state.type = ERROR
    },
    closeAlert: (state) => {
      state.open = false
      state.text = ''
      state.type = ''
    }
  },
})

export const {
  openSuccessAlert,
  openErrorAlert,
  closeAlert
} = alerts.actions


export default alerts.reducer