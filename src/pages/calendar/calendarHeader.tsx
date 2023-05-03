import React from 'react'
import { CalendarHeaderStyled, CalendarHeaderWrapperStyled } from './calendar.style'
import { Button, IconButton } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { UseCalendarFuncsReturn, UseCalendarStateReturn } from './utils/types';

interface CalendarHeaderProps {
  state: UseCalendarStateReturn
  functions: UseCalendarFuncsReturn
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({ state, functions }) => {
  return (
    <CalendarHeaderStyled>
        <IconButton onClick={() => functions.onClickArrow('left')}>
          <ArrowBackIosIcon/>
        </IconButton>
        <CalendarHeaderWrapperStyled>
          {state.mode === 'days' && (
            <Button onClick={() => functions.setMode('monthes')}>
              {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
            </Button>
          )}
          {state.mode === 'monthes' && (
            <Button onClick={() => functions.setMode('years')}>
              {state.selectedYear}
            </Button>
          )}
          {state.mode === 'years' && (
            <Button onClick={() => functions.setMode('days')}>
              {state.selectedYearsInterval[0]}  -  {state.selectedYearsInterval[state.selectedYearsInterval.length - 1]}
            </Button>
          )}
        </CalendarHeaderWrapperStyled>
        <IconButton onClick={() => functions.onClickArrow('right')}>
          <ArrowForwardIosIcon/>
        </IconButton>
      </CalendarHeaderStyled>
  )
}

export default CalendarHeader