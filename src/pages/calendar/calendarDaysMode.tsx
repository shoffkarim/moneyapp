import React from 'react'
import { CalendarWrapperModeStyled, DaysContainerStyled, WeekDayNameStyled, WeekDaysNameContainerStyled } from './calendar.style'
import CalendarDayItem from './calendarDayItem'
import { checkDateIsEqual, checkIsToday } from './utils'
import { CalendarDataType, UseCalendarFuncsReturn, UseCalendarStateReturn } from './utils/types'

interface CalendarDaysModeProps {
  state: UseCalendarStateReturn
  functions: UseCalendarFuncsReturn
  selectDate: (date: Date) => void
  data: CalendarDataType
}

export const CalendarDaysMode: React.FC<CalendarDaysModeProps> = ({ state, functions, selectDate, data }) => {

  return (
    <CalendarWrapperModeStyled>
      <WeekDaysNameContainerStyled>
        {state.weekDaysNames.map((weekDaysName) => (
          <WeekDayNameStyled key={weekDaysName.dayShort}>
            <span>{weekDaysName.dayShort}</span>
          </WeekDayNameStyled>
        ))}
      </WeekDaysNameContainerStyled>
      <DaysContainerStyled>
        {state.calendarDays.map((day) => {
          const isToday = checkIsToday(day.date)
          const isSelectedDay = checkDateIsEqual(day.date, state.selectedDate.date)
          const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex
          return (
            <CalendarDayItem
              key={`${day.dayNumber}-${day.monthIndex}`}
              isToday={isToday}
              isAdditionalDay={isAdditionalDay}
              isSelectedDay={isSelectedDay}
              functions={functions}
              selectDate={selectDate}
              day={day}
            />
          )
        })}
      </DaysContainerStyled>
    </CalendarWrapperModeStyled>
  )
}

export default CalendarDaysMode