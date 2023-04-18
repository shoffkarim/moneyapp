import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react'

export const Calendar: React.FC = () =>
  <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth'/>