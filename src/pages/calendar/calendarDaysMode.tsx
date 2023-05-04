import { Typography } from '@mui/material'
import React from 'react'
import { CalendarWrapperModeStyled, DayItem, DayItemHaveMore, DayItemsList, CalendarItemNumber, DaysContainerStyled, DayStyled, WeekDayNameStyled, WeekDaysNameContainerStyled } from './calendar.style'
import { checkDateIsEqual, checkIsToday } from './utils'
import { UseCalendarFuncsReturn, UseCalendarStateReturn } from './utils/types'

interface CalendarDaysModeProps {
  state: UseCalendarStateReturn
  functions: UseCalendarFuncsReturn
  selectDate: (date: Date) => void
}

export const CalendarDaysMode: React.FC<CalendarDaysModeProps> = ({ state, functions, selectDate }) => {
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
            <DayStyled key={`${day.dayNumber}-${day.monthIndex}`}
              isAdditionalDay={isAdditionalDay}
              isToday={isToday}
              isSelectedDay={isSelectedDay}
              onClick={() => {
                functions.setSelectedDate(day)
                selectDate(day.date)
              }}
            >
              <CalendarItemNumber>
                {day.dayNumber}
              </CalendarItemNumber>
              <DayItemsList>
                <DayItem backgroundColor="#FF00FF">
                  <Typography fontSize="14px">Food</Typography>
                </DayItem>
                <DayItem backgroundColor="#008000">
                  <Typography fontSize="14px">Medicine</Typography>
                </DayItem>
                <DayItem backgroundColor="#FF00FF">
                  <Typography fontSize="14px">Food</Typography>
                </DayItem>
                <DayItem backgroundColor="#008000">
                  <Typography fontSize="14px">Medicine</Typography>
                </DayItem>
              </DayItemsList>
              <DayItemHaveMore><Typography fontSize="12px">2 more...</Typography></DayItemHaveMore>
            </DayStyled>
          )
        })}
      </DaysContainerStyled>
    </CalendarWrapperModeStyled>
  )
}

export default CalendarDaysMode