import React from 'react'
import { CalendarWrapperModeStyled, WeekDayNameStyled, WeekDaysNameContainerStyled } from '../calendar.style'
import { DaysContainerStyled } from './calendarDays.style'
import CalendarDayItem from './calendarDayItem'
import { checkDateIsEqual, checkIsToday } from '../utils'
import { CalendarDataType, UseCalendarFuncsReturn, UseCalendarStateReturn } from '../types'

interface CalendarDaysModeProps {
  state: UseCalendarStateReturn
  functions: UseCalendarFuncsReturn
  selectDate: (date: Date) => void
}

export const CalendarDaysMode: React.FC<CalendarDaysModeProps> = ({ state, functions, selectDate }) => {

  if (state && state.calendarDays) {
    return (
      <CalendarWrapperModeStyled>
        <WeekDaysNameContainerStyled>
          {state?.weekDaysNames.map((weekDaysName) => (
            <WeekDayNameStyled key={weekDaysName.dayShort}>
              <span>{weekDaysName.dayShort}</span>
            </WeekDayNameStyled>
          ))}
        </WeekDaysNameContainerStyled>
        <DaysContainerStyled>
          {state.calendarDays.map((day) => {

            const isToday = checkIsToday(day?.date)
            const isSelectedDay = checkDateIsEqual(day?.date, state?.selectedDate.date)
            const isAdditionalDay = day?.monthIndex !== state?.selectedMonth.monthIndex
            return day &&
              <CalendarDayItem
                key={`${day?.dayNumber}-${day?.monthIndex}`}
                isToday={isToday}
                isAdditionalDay={isAdditionalDay}
                isSelectedDay={isSelectedDay}
                functions={functions}
                selectDate={selectDate}
                day={day}
              />
          })}
        </DaysContainerStyled>
      </CalendarWrapperModeStyled>
    )
  }
  return <></>
}

export default CalendarDaysMode