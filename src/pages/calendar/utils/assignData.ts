import { checkDateIsEqual } from './checkDateIsEqual'
import { CalendarDataType, UseCalendarStateReturn } from '../types'
export const assignData = (state: UseCalendarStateReturn, data: CalendarDataType): any => {
  const assignedDays = state.calendarDays?.map((day) => {
    // return day
    if(data.days) {
      return data.days.map((dataDay) => {
        if (checkDateIsEqual(day.date, dataDay.date)) {
          return Object.assign(day, dataDay)
        }
        return day
      })[0] // TODO: refactoring
    }
  })
  return {
    ...state,
    calendarDays: assignedDays
  }
}