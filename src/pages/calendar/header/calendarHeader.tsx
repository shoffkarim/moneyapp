import React from 'react'
import { CalendarHeaderMainButtonStyled, CalendarHeaderStyled, CalendarHeaderWrapperStyled } from './calendarHeader.style'
import { IconButton } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { UseCalendarFuncsReturn, UseCalendarStateReturn } from '../types'

interface CalendarHeaderProps {
  state: UseCalendarStateReturn
  functions: UseCalendarFuncsReturn
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({ state, functions }) => {
  return (
    <CalendarHeaderStyled>
      <IconButton onClick={() => functions.onClickArrow('left')}>
        <ArrowBackIosIcon htmlColor="white"/>
      </IconButton>
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
      <IconButton onClick={() => functions.onClickArrow('right')}>
        <ArrowForwardIosIcon htmlColor="white"/>
      </IconButton>
    </CalendarHeaderStyled>
  )
}

export default CalendarHeader