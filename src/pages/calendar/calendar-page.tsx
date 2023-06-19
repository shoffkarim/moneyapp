import React, { useState } from 'react'
import { Calendar } from './calendar'
import { CalendarData } from './sampleDataCalendar'
import { CalendarStateDaysReturn, CalendarStateMonthesReturn, CalendarStateReturn, CalendarStateYearsReturn } from './types'
import { useLazyQuery, useQuery } from "@apollo/client"
import { GET_TRANSACTIONS_CALENDAR } from '__data__/queries/transactions'
import { handleData } from './utils/handleData'
import { GET_USER_CARDS } from '__data__/queries/cards'

export const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const [getCalendarData, { data }] = useLazyQuery(GET_TRANSACTIONS_CALENDAR)

  const { data: cardsData } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '647db351529d7960cb8ce476'
    } }
  )

  const calendarData = handleData(cardsData, data )
  const handleCalendarDate = (state: CalendarStateReturn) => {
    if(state?.mode === 'days') {
      getCalendarData({ variables: {
        id: '647db351529d7960cb8ce476',
        firstDay: state.firstDay,
        lastDay: state.lastDay
      } })
    }
  }
  return (
    <Calendar
      selectedDate={selectedDate}
      selectDate={setSelectedDate}
      data={{ days: calendarData }}
      locale="en-US"
      firstWeekDay={2}
      sendParams={handleCalendarDate}
    />
  )
}
