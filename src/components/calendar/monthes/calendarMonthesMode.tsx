import { Typography } from '@mui/material'
import React from 'react'
import { CalendarItemInfoStyled, CalendarItemNumberStyled, CalendarItemWrapperStyled, CalendarWrapperModeStyled } from '../calendar.style'
import { MonthesContainerStyled, MonthStyled } from './calendarMonthes.style'
import { UseCalendarFuncsReturn, UseCalendarStateReturn } from '../types'

interface CalendarMonthesModeProps {
  state: UseCalendarStateReturn
  functions: UseCalendarFuncsReturn
}

export const CalendarMonthesMode: React.FC<CalendarMonthesModeProps> = ({ state, functions }) => {
  return (
    <CalendarWrapperModeStyled>
      <MonthesContainerStyled>
        {state.monthesNames.map((month) => {
          const isCurrentMonth = new Date().getMonth() === month.monthIndex && new Date().getFullYear() === state.selectedYear
          // const isSelectedMonth = state.selectedDate.year === state.selectedYear && month.monthIndex === state.selectedDate.monthIndex
          return (
            <MonthStyled
              key={`${month.monthIndex}`}
              onClick={() => {
                functions.setSelectedMonthByIndex(month.monthIndex)
                functions.setMode('days')
              }}
            >
              <CalendarItemNumberStyled
                isToday={isCurrentMonth}
                isAdditionalDay={false}
                isSelectedDay={false}>
                {month.monthShort}
              </CalendarItemNumberStyled>
              <CalendarItemWrapperStyled>
                <CalendarItemInfoStyled>
                  <Typography>
                    Income:
                  </Typography>
                  <Typography>
                    215 534
                  </Typography>
                </CalendarItemInfoStyled>
                <CalendarItemInfoStyled>
                  <Typography>
                    Outcome:
                  </Typography>
                  <Typography>
                    152 678
                  </Typography>
                </CalendarItemInfoStyled>
              </CalendarItemWrapperStyled>
            </MonthStyled>
          )
        })}
      </MonthesContainerStyled>
    </CalendarWrapperModeStyled>
  )
}

export default CalendarMonthesMode