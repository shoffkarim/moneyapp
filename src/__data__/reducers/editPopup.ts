import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: '',
  iconName: '',
  color: '',
  name: '',
  value: 0,
  type: '',
  open: false
}

const editPopup = createSlice({
  name: 'editPopup',
  initialState,
  reducers: {
    openEditPopup: (state, action) => {
      return state = {
        ...action.payload,
        open: true
      }
    },
    closeEditPopup: () => {
      return initialState
    },
    changeIcon: (state, action) => {
      state.iconName = action.payload
    },
    changeColor: (state, action) => {
      state.color = action.payload
    }
  },
})

export const {
  openEditPopup,
  closeEditPopup,
  changeIcon,
  changeColor
} = editPopup.actions

export default editPopup.reducer