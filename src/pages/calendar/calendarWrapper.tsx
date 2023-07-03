import React, { useCallback } from 'react'
import { UseCalendarFuncsReturn, UseCalendarStateReturn } from '../../components/calendar/types'
import { useQuery } from '@apollo/client'
import { GET_CALENDAR_DATA } from '__data__/queries/calendar'
import { Calendar } from '../../components/calendar'
import { assignData } from '../../components/calendar/utils/assignData'
import { useCalendar } from 'components/calendar/useCalendar'

// interface CalendarWrapperProps {
//   state: UseCalendarStateReturn,
//   functions: UseCalendarFuncsReturn
//   // selectDate: (date: Date) => void
// }

export const CalendarWrapper: React.FC = () => {
  const today = new Date()

  const { state, functions } = useCalendar({ locale: "en-US", firstWeekDay: 2 })

  const { data } = useQuery(GET_CALENDAR_DATA,
    { variables: {
      id: '647db351529d7960cb8ce476',
      firstDay: state.calendarDays?.[0].date,
      lastDay: state.calendarDays?.[state.calendarDays.length - 1].date
    } })

  const getData = useCallback(() => {
    if(data && data.calendarItems.length > 0) {
      return assignData(state, { days: data.calendarItems })
    }
    return state
  }, [state, data])

  const handledState = getData()


  return (
    <Calendar
      state={handledState}
      functions={functions}
      // selectDate={selectDate}
    />
  )
}
