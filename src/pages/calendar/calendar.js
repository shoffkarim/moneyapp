import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react'

export const Calendar = () =>
  <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth'/>