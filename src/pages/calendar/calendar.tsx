import React, { useEffect } from 'react'
import { useCalendar } from './useCalendar'
import CalendarHeader from './header/calendarHeader';
import CalendarDaysMode from './days/calendarDaysMode';
import CalendarMonthesMode from './monthes/calendarMonthesMode';
import CalendarYearsMode from './years/calendarYearsMode';
import { CalendarDataType, CalendarStateReturn } from './types';
import { assignData } from './utils/assignData';
import { handleStateApi } from './utils/handleStateApi';

interface CalendarProps {
  locale?: string
  selectedDate: Date
  selectDate: (date: Date) => void
  firstWeekDay?: number
  data: CalendarDataType
  sendParams: (state: CalendarStateReturn) => CalendarStateReturn | void
}

export const Calendar: React.FC<CalendarProps> = ({ locale = 'default', firstWeekDay = 2, selectedDate, selectDate, data, sendParams}) => {
  const { state, functions } = useCalendar({ locale, selectedDate, firstWeekDay })

  const newState = assignData(state, data)

  useEffect(() => {
    const returnState = handleStateApi(state)
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
