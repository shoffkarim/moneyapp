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

  const returnState: CalendarStateReturn = {
    mode: state.mode,
    firstDay: state.calendarDays[0].date,
    lastDay: state.calendarDays[state.calendarDays.length - 1].date,
    monthIndex: state.selectedMonth.monthIndex,
    monthName: state.selectedMonth.monthName,
    year: state.selectedYear
  }
  const newState = assignData(state, data)
  console.log(newState)
  useEffect(() => {
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
