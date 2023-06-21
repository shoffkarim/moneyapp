import React, { useCallback, useEffect, useState } from 'react'
import { Calendar } from '../../components/calendar/calendar'
import { CalendarStateReturn } from '../../components/calendar/types'
import { useLazyQuery, useQuery } from "@apollo/client"
import { GET_TRANSACTIONS_CALENDAR } from '__data__/queries/transactions'
import { handleData } from '../../components/calendar/utils/handleData'
import { GET_USER_CARDS } from '__data__/queries/cards'
import { useCalendar } from '../../components/calendar/useCalendar'
import { handleStateApi } from '../../components/calendar/utils/handleStateApi'
import { assignData } from '../../components/calendar/utils/assignData'
import { CalendarWrapper } from './calendarWrapper'

export const CalendarPage: React.FC = () => {

  const [selectedDate, setSelectedDate] = useState(new Date())

  const { state, functions } = useCalendar({ locale: "en-US", selectedDate, firstWeekDay: 2 })



  // const { data: cardsData } = useQuery(GET_USER_CARDS,
  //   { variables: {
  //     id: '647db351529d7960cb8ce476'
  //   } }
  // )
  // console.log(state)


  // if(state?.mode === 'days' && state.calendarDays?.[0] && state.calendarDays?.[state.calendarDays.length - 1]) {
  //   getCalendarData({ variables: {
  //     id: '647db351529d7960cb8ce476',
  //     firstDay: state.calendarDays?.[0].date,
  //     lastDay: state.calendarDays?.[state.calendarDays.length - 1].date
  //   } })
  // }


  return (
    <CalendarWrapper
      state={state}
      functions={functions}
      selectDate={setSelectedDate}
    />
  )
}
