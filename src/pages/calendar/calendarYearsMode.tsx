import React from 'react'
import { CalendarWrapperModeStyled, YearsContainerStyled, YearStyled } from './calendar.style'
import { UseCalendarFuncsReturn, UseCalendarStateReturn } from './utils/types'

interface CalendarYearsModeProps {
  state: UseCalendarStateReturn
  functions: UseCalendarFuncsReturn
}

export const CalendarYearsMode: React.FC<CalendarYearsModeProps> = ({ state, functions }) => {
  return (
    <CalendarWrapperModeStyled>
      <YearsContainerStyled>
        <YearStyled
          isCurrentYear={false}
          isSelectedYear={false}
          isAdditionalYear
        >
          {state.selectedYearsInterval[0] - 1}
        </YearStyled>
        {state.selectedYearsInterval.map((year) => {
          const isCurrentYear = new Date().getFullYear() === year
          const isSelectedYear = year === state.selectedDate.year

          return (
            <YearStyled
              key={`${year}`}
              isCurrentYear={isCurrentYear}
              isSelectedYear={isSelectedYear}
              isAdditionalYear={false}
              onClick={() => {
                functions.setSelectedYear(year)
                functions.setMode('monthes')
              }}
            >
              <span>
                {year}
              </span>
            </YearStyled>
          )
        })}
        <YearStyled
          isCurrentYear={false}
          isSelectedYear={false}
          isAdditionalYear
        >
          {state.selectedYearsInterval[state.selectedYearsInterval.length - 1] + 1}
        </YearStyled>
      </YearsContainerStyled>
    </CalendarWrapperModeStyled>
  )
}

export default CalendarYearsMode