import { Typography } from '@mui/material'
import React from 'react'
import { CalendarWrapperModeStyled, YearsContainerStyled, YearStyled, CalendarItemNumberStyled, CalendarItemWrapperStyled, CalendarItemInfoStyled } from './calendar.style'
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
          onClick={() => functions.onClickArrow('left')}
        >
          <CalendarItemNumberStyled>
            {state.selectedYearsInterval[0] - 1}
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
              <CalendarItemNumberStyled>
                {year}
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
            </YearStyled>
          )
        })}
        <YearStyled
          isCurrentYear={false}
          isSelectedYear={false}
          isAdditionalYear
          onClick={() => functions.onClickArrow('right')}
        >
          <CalendarItemNumberStyled>
            {state.selectedYearsInterval[state.selectedYearsInterval.length - 1] + 1}
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
        </YearStyled>
      </YearsContainerStyled>
    </CalendarWrapperModeStyled>
  )
}

export default CalendarYearsMode