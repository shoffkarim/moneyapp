import { createSlice } from "@reduxjs/toolkit"
import { CreateDateReturn } from "components/calendar/types"
import { createDate } from "components/calendar/useCalendar/helpers"

type CalendarDayPopupType = {
  open: boolean,
  day: CreateDateReturn
}
const initialState: CalendarDayPopupType = {
  open: false,
  day: createDate({ date: new Date() })
}

const calendarDayPopup = createSlice({
  name: 'calendarDayPopup',
  initialState,
  reducers: {
    openCalendarDayPopup: (state, action) => state = action.payload,
    closeCalendarDayPoup: (state) => {
      state.open = false
    }
  },
})

export const {
  openCalendarDayPopup,
  closeCalendarDayPoup,
} = calendarDayPopup.actions


export default calendarDayPopup.reducer