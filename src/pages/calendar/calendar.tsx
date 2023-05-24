import React, { useEffect } from 'react'
import { useCalendar } from './useCalendar'
import CalendarHeader from './calendarHeader';
import CalendarDaysMode from './calendarDaysMode';
import CalendarMonthesMode from './calendarMonthesMode';
import CalendarYearsMode from './calendarYearsMode';
import { CalendarDataType, CalendarStateReturn, UseCalendarStateReturn } from './utils/types';
import { assignData } from './utils/assignData';

interface CalendarProps {
  locale?: string
  selectedDate: Date
  selectDate: (date: Date) => void
  firstWeekDay?: number
  data: CalendarDataType
  sendParams: (state: CalendarStateReturn) => CalendarStateReturn | void
}
// TODO: sendParams for different

export const Calendar: React.FC<CalendarProps> = ({ locale = 'default', firstWeekDay = 2, selectedDate, selectDate, data, sendParams}) => {
  const { state, functions } = useCalendar({ locale, selectedDate, firstWeekDay })

  const handleReturnStateApi = (state: UseCalendarStateReturn): CalendarStateReturn => {
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

  const newState = assignData(state, data)
  console.log(state)
  useEffect(() => {
    const returnState = handleReturnStateApi(state)
    sendParams(returnState)
  }, [state])

  return (
    <div>
      <CalendarHeader state={state} functions={functions} />
      {state.mode === 'days' &&
        <CalendarDaysMode state={newState} functions={functions} selectDate={selectDate} data={data} />
      }

      {state.mode === 'monthes' &&
        <CalendarMonthesMode state={state} functions={functions} />
      }

      {state.mode === 'years' &&
        <CalendarYearsMode state={state} functions={functions} />
      }
    </div>
  )
}
