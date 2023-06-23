import { checkDateIsEqual } from './checkDateIsEqual'
import { UseCalendarStateReturn } from '../types'
export const assignData = (state: UseCalendarStateReturn, data: any): any => {
  const assignedDays = state.calendarDays?.map((day) => {
    // return day
    if(data?.days) {
      return data.days.map((dataDay: any) => {

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