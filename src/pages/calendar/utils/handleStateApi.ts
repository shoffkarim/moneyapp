import { CalendarStateReturn, UseCalendarStateReturn } from '../types'

export const handleStateApi = (state: UseCalendarStateReturn): CalendarStateReturn => {
  if(state.mode === 'days') {
    return {
      mode: state.mode,
      firstDay: state.calendarDays[0].date,
      lastDay: state.calendarDays[state.calendarDays.length - 1].date,
      monthIndex: state.selectedMonth.monthIndex,
      monthName: state.selectedMonth.monthName,
      year: state.selectedYear
    }
  }
  if(state.mode === 'monthes') {
    return {
      mode: state.mode,
      firstMonthIndex: state.monthesNames[0].monthIndex,
      firstMonthName: state.monthesNames[0].month,
      lastMonthIndex: state.monthesNames[state.monthesNames.length - 1].monthIndex,
      lastMonthName: state.monthesNames[state.monthesNames.length - 1].month,
      year: state.selectedYear
    }
  } else {
    return {
      mode: state.mode,
      firstYear: state.selectedYearsInterval[0] - 1,
      lastYear: state.selectedYearsInterval[state.selectedYearsInterval.length - 1] + 1,
      year: state.selectedYear
    }
  }
}