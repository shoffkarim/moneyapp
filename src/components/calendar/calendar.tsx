import React, { useCallback, useEffect } from 'react'
import { useCalendar } from './useCalendar'
import CalendarHeader from './header/calendarHeader'
import CalendarDaysMode from './days/calendarDaysMode'
import CalendarMonthesMode from './monthes/calendarMonthesMode'
import CalendarYearsMode from './years/calendarYearsMode'
import { CalendarDataType, CalendarStateReturn, UseCalendarFuncsReturn, UseCalendarStateReturn } from './types'
import { assignData } from './utils/assignData'
import { handleStateApi } from './utils/handleStateApi'

interface CalendarProps {
  state: UseCalendarStateReturn,
  functions: UseCalendarFuncsReturn
  selectDate: (date: Date) => void
  // sendParams: (state: CalendarStateReturn) => CalendarStateReturn | void
}

export const Calendar: React.FC<CalendarProps> = ({ state, functions, selectDate }) => {

  // useEffect(() => {
  //   const returnState = handleStateApi(state)
  //   sendParams(returnState)
  // }, [state])

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
