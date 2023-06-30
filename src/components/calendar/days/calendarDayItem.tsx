import { Typography } from '@mui/material'
import React from 'react'
import { CalendarItemNumberStyled, CalendarItemTopStyled, CalendarItemAdditionalStyled } from '../calendar.style'
import { DayItem, DayItemHaveMore, DayItemsList, DayStyled, DayItemTextStyled } from './calendarDays.style'
import { CreateDateReturn, UseCalendarFuncsReturn } from '../types'
import { useAppDispatch } from 'hooks'
import { openCalendarDayPopup } from '__data__/reducers/calendarDayPopup'

interface CalendarDayItemProps {
  isAdditionalDay: boolean
  isToday: boolean
  isSelectedDay: boolean
  functions: UseCalendarFuncsReturn
  day: CreateDateReturn
}

export const CalendarDayItem: React.FC<CalendarDayItemProps> = ({ isAdditionalDay, isToday, isSelectedDay, functions, day }) => {

  const dispatch = useAppDispatch()
  const handleVisiblePopup = (day: CreateDateReturn) => {
    dispatch(openCalendarDayPopup({ open: true, day: day }))
  }

  return (
    <>
      <DayStyled
        isAdditionalDay={isAdditionalDay}
        isToday={isToday}
        isSelectedDay={isSelectedDay}
        onClick={() => {
          handleVisiblePopup(day)
        }}
      >
        <CalendarItemTopStyled>
          <CalendarItemNumberStyled
            isToday={isToday}
            isSelectedDay={isSelectedDay}
            isAdditionalDay={isAdditionalDay}
          >
            {day?.dayNumber}
          </CalendarItemNumberStyled>

        </CalendarItemTopStyled>
        {day?.items &&
          <DayItemsList>
            {day?.items.map((item, index) => {
              if(index < 4) {
                return(
                  <DayItem backgroundColor={item.backgroundColor} key={`${item.title}-${index}`}>
                    <DayItemTextStyled fontSize="14px">{item.title}</DayItemTextStyled>
                    <Typography fontSize="14px">{item.value}</Typography>
                  </DayItem>
                )
              }
            })}
          </DayItemsList>
        }
        {day?.items && day.items.length > 4 &&
          <DayItemHaveMore>
            <Typography fontSize="12px">{`${day.items.length - 4} more...`}</Typography>
          </DayItemHaveMore>
        }
        {day && day.description &&
            <CalendarItemAdditionalStyled>
              <Typography fontSize="14px" fontWeight="600">{day.description?.title}</Typography>
              <Typography fontSize="14px" fontWeight="600">{day.description?.subTitle}</Typography>
            </CalendarItemAdditionalStyled>
        }
      </DayStyled>
    </>
  )
}

export default CalendarDayItem