import { Button, IconButton } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react'
import { CalendarHeaderStyled, CalendarHeaderWrapperStyled, WeekDaysNameContainerStyled, WeekDayNameStyled, DaysContainerStyled, DayStyled } from './calendar.style'
import { useCalendar } from './useCalendar'
import { checkDateIsEqual, checkIsToday } from './utils'

interface CalendarProps {
  locale?: string
  selectedDate: Date
  selectDate: (date: Date) => void
  firstWeekDay?: number
}

export const Calendar: React.FC<CalendarProps> = ({ locale = 'default', selectedDate, selectDate, firstWeekDay = 2}) => {
  const { state, functions } = useCalendar({ locale, selectedDate, firstWeekDay })
  return (
    <div>
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
      <WeekDaysNameContainerStyled>
        {state.mode === 'days' &&
            state.weekDaysNames.map((weekDaysName) => (
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
              <span>
                {day.dayNumber}
              </span>
            </DayStyled>
          )
        })}
      </DaysContainerStyled>
    </div>
  )
}
