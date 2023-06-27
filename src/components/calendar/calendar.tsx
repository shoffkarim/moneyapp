import React from 'react'
import { CalendarHeader } from './header'
import { CalendarDaysMode } from './days'
import { CalendarMonthesMode } from './monthes'
import { CalendarYearsMode }  from './years'
import { UseCalendarFuncsReturn, UseCalendarStateReturn } from './types'


interface CalendarProps {
  state: UseCalendarStateReturn,
  functions: UseCalendarFuncsReturn
  selectDate: (date: Date) => void
}

export const Calendar: React.FC<CalendarProps> = ({ state, functions, selectDate }) => {

  return (
    state && <div>
      <CalendarHeader state={state} functions={functions} />
      {state.mode === 'days' && state && state.calendarDays &&
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
