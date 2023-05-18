import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { CalendarItemBorderBottomStyled, CalendarItemBorderTopStyled, CalendarItemNumberStyled, CalendarItemTopStyled, DayItem, DayItemHaveMore, DayItemPopupOverlayStyled, DayItemPopupStyled, DayItemsList, DayStyled } from './calendar.style'
import { CreateDateReturn, UseCalendarFuncsReturn } from './utils/types'

interface CalendarDayItemProps {
  isAdditionalDay: boolean
  isToday: boolean
  isSelectedDay: boolean
  functions: UseCalendarFuncsReturn
  selectDate: (date: Date) => void
  day: CreateDateReturn
}

export const CalendarDayItem: React.FC<CalendarDayItemProps> = ({ isAdditionalDay, isToday, isSelectedDay, functions, selectDate, day }) => {
  const [visibleDayPopup, setVisibleDayPopup] = useState(false)

  const handleVisiblePopup = (val: boolean) => {
    setVisibleDayPopup(val)
  }

  return (
    <>
      <DayStyled
        isAdditionalDay={isAdditionalDay}
        isToday={isToday}
        isSelectedDay={isSelectedDay}
        onClick={() => {
          functions.setSelectedDate(day)
          selectDate(day.date)
          handleVisiblePopup(true)
        }}
      >
        <CalendarItemBorderTopStyled />
        <CalendarItemBorderBottomStyled />
        <CalendarItemTopStyled>
          <CalendarItemNumberStyled>
            {day.dayNumber}
          </CalendarItemNumberStyled>
          {/* <CalendarItemAdditionalStyled>
                  <Typography fontSize="12px">100 000 P</Typography>
                </CalendarItemAdditionalStyled> */}
        </CalendarItemTopStyled>
        {day.items &&
          <DayItemsList>
            {day.items.map((item) => {
              return (
                <DayItem backgroundColor={item.backgroundColor}>
                  <Typography fontSize="14px">{item.title}</Typography>
                  <Typography fontSize="14px">{item.value}</Typography>
                </DayItem>
              )
            })}
          </DayItemsList>
        }
        <DayItemHaveMore><Typography fontSize="12px">2 more...</Typography></DayItemHaveMore>
        {visibleDayPopup &&
          <DayItemPopupStyled>
            <CalendarItemTopStyled>
              <CalendarItemNumberStyled>
                {day.dayNumber}
              </CalendarItemNumberStyled>
              {/* <CalendarItemAdditionalStyled>
                    <Typography fontSize="12px">100 000 P</Typography>
                  </CalendarItemAdditionalStyled> */}
            </CalendarItemTopStyled>
            {day.items &&
              <DayItemsList>
                {day.items.map((item) => {
                  return (
                    <DayItem backgroundColor={item.backgroundColor}>
                      <Typography fontSize="14px">{item.title}</Typography>
                      <Typography fontSize="14px">{item.value}</Typography>
                    </DayItem>
                  )
                })}
              </DayItemsList>
            }
          </DayItemPopupStyled>
        }
      </DayStyled>
      {visibleDayPopup &&
        <DayItemPopupOverlayStyled
          onClick={() => handleVisiblePopup(false)} />
      }
    </>
  )
}

export default CalendarDayItem