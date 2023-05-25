import React from 'react'
import { CalendarItemNumberStyled, CalendarItemTopStyled } from '../calendar.style'
import { DayItem, DayItemPopupStyled, DayItemsList, DayTotalContainerStyled } from './calendarDays.style'
import { Typography } from '@mui/material'
import { CreateDateReturn } from '../types'


interface CalendarDayItemPopupProps {
  day: CreateDateReturn
}
export const CalendarDayItemPopup: React.FC<CalendarDayItemPopupProps> = ({ day }) => {
  return (
    <DayItemPopupStyled>
            <CalendarItemTopStyled>
              <CalendarItemNumberStyled>
                {day.dayNumber}
              </CalendarItemNumberStyled>

            </CalendarItemTopStyled>
            {day.items &&
              <DayItemsList>
                {day.items.map((item, index) => {
                  return (
                    <DayItem backgroundColor={item.backgroundColor} key={`${item.title}-${index}`}>
                      <Typography fontSize="14px">{item.title}</Typography>
                      <Typography fontSize="14px">{item.value}</Typography>
                    </DayItem>
                  )
                })}
              </DayItemsList>
            }
            {day.description &&
              <DayTotalContainerStyled>
                <Typography>{day.description?.title}</Typography>
                <Typography>{day.description?.subTitle}</Typography>
              </DayTotalContainerStyled>
            }
          </DayItemPopupStyled>
  )
}

export default CalendarDayItemPopup