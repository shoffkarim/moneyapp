import React, { useCallback } from 'react'
import { UseCalendarFuncsReturn, UseCalendarStateReturn } from '../../components/calendar/types'
import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_TRANSACTIONS_CALENDAR } from '__data__/queries/transactions'
import { Calendar } from '../../components/calendar/calendar'
import { GET_USER_CARDS } from '__data__/queries/cards'
import { handleData } from '../../components/calendar/utils/handleData'
import { assignData } from '../../components/calendar/utils/assignData'

interface CalendarWrapperProps {
  state: UseCalendarStateReturn,
  functions: UseCalendarFuncsReturn
  selectDate: (date: Date) => void
  // sendParams: (state: CalendarStateReturn) => CalendarStateReturn | void
}

export const CalendarWrapper: React.FC<CalendarWrapperProps> = ({ state, functions, selectDate }) => {
  const { data } = useQuery(GET_TRANSACTIONS_CALENDAR,
    { variables: {
      id: '647db351529d7960cb8ce476',
      firstDay: state.calendarDays?.[0].date,
      lastDay: state.calendarDays?.[state.calendarDays.length - 1].date
    } })
  const { data: cardsData } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '647db351529d7960cb8ce476'
    } }
  )

  const calendarData = handleData(cardsData, data)

  const getData = useCallback(() => {
    if(calendarData) {
      return assignData(state, { days: calendarData })
    }
  }, [state, calendarData])
  const handledState = getData() ? getData() : state
  return (
    <Calendar
      state={handledState}
      functions={functions}
      selectDate={selectDate}
    />
  )
}
