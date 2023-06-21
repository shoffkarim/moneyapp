import { Typography } from '@mui/material'
import React from 'react'
import { CalendarWrapperModeStyled, CalendarItemNumberStyled, CalendarItemWrapperStyled, CalendarItemInfoStyled } from '../calendar.style'
import { YearsContainerStyled, YearStyled } from './calendarYears.style'
import { UseCalendarFuncsReturn, UseCalendarStateReturn } from '../types'

interface CalendarYearsModeProps {
  state: UseCalendarStateReturn
  functions: UseCalendarFuncsReturn
}

export const CalendarYearsMode: React.FC<CalendarYearsModeProps> = ({ state, functions }) => {
  return (
    <CalendarWrapperModeStyled>
      <YearsContainerStyled>
        <YearStyled
          onClick={() => functions.onClickArrow('left')}
        >
          <CalendarItemNumberStyled
            isToday={false}
            isAdditionalDay
            isSelectedDay={false}
          >
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
          // const isSelectedYear = year === state.selectedDate.year

          return (
            <YearStyled
              key={`${year}`}
              onClick={() => {
                functions.setSelectedYear(year)
                functions.setMode('monthes')
              }}
            >
              <CalendarItemNumberStyled
                isToday={isCurrentYear}
                isAdditionalDay={false}
                isSelectedDay={false}
              >
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
          onClick={() => functions.onClickArrow('right')}
        >
          <CalendarItemNumberStyled
            isToday={false}
            isAdditionalDay
            isSelectedDay={false}
          >
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