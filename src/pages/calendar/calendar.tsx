import React from 'react'
import { useCalendar } from './useCalendar'
import CalendarHeader from './calendarHeader';
import CalendarDaysMode from './calendarDaysMode';
import CalendarMonthesMode from './calendarMonthesMode';
import CalendarYearsMode from './calendarYearsMode';

interface CalendarProps {
  locale?: string
  selectedDate: Date
  selectDate: (date: Date) => void
  firstWeekDay?: number
}

export const Calendar: React.FC<CalendarProps> = ({ locale = 'default', selectedDate, selectDate, firstWeekDay = 2}) => {
  const { state, functions } = useCalendar({ locale, selectedDate, firstWeekDay })
  return (
    <div>
      <CalendarHeader state={state} functions={functions} />
      {state.mode === 'days' &&
        <CalendarDaysMode state={state} functions={functions} selectDate={selectDate} />
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
