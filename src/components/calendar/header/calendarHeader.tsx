import React from 'react'
import { CalendarHeaderControlsWrapperStyled, CalendarHeaderMainButtonStyled, CalendarHeaderStyled, CalendarHeaderButtonTodayStyled, CalendarHeaderWrapperStyled } from './calendarHeader.style'
import { IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { UseCalendarFuncsReturn, UseCalendarStateReturn } from '../types'

interface CalendarHeaderProps {
  state: UseCalendarStateReturn
  functions: UseCalendarFuncsReturn
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({ state, functions }) => {
  return (
    <CalendarHeaderStyled>

      <CalendarHeaderWrapperStyled>
        {state.mode === 'days' && (
          <CalendarHeaderMainButtonStyled onClick={() => functions.setMode('monthes')}>
            {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
          </CalendarHeaderMainButtonStyled>
        )}
        {state.mode === 'monthes' && (
          <CalendarHeaderMainButtonStyled onClick={() => functions.setMode('years')}>
            {state.selectedYear}
          </CalendarHeaderMainButtonStyled>
        )}
        {state.mode === 'years' && (
          <CalendarHeaderMainButtonStyled onClick={() => functions.setMode('days')}>
            {state.selectedYearsInterval[0]}  -  {state.selectedYearsInterval[state.selectedYearsInterval.length - 1]}
          </CalendarHeaderMainButtonStyled>
        )}
      </CalendarHeaderWrapperStyled>
      <CalendarHeaderControlsWrapperStyled>
        <IconButton onClick={() => functions.onClickArrow('left')}>
          <ArrowBackIosNewIcon htmlColor="white"/>
        </IconButton>
        <CalendarHeaderButtonTodayStyled
          variant='text'
          onClick={() => {
            console.log(functions.backToToday())
          }}>Today</CalendarHeaderButtonTodayStyled>
        <IconButton onClick={() => functions.onClickArrow('right')}>
          <ArrowForwardIosIcon htmlColor="white"/>
        </IconButton>
      </CalendarHeaderControlsWrapperStyled>
    </CalendarHeaderStyled>
  )
}

export default CalendarHeader