import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { CalendarItemNumberStyled, CalendarItemTopStyled, CalendarItemAdditionalStyled } from '../calendar.style'
import { DayItem, DayItemHaveMore, DayItemPopupOverlayStyled, DayItemsList, DayStyled, DayItemTextStyled } from './calendarDays.style'
import { CreateDateReturn, UseCalendarFuncsReturn } from '../types'
import CalendarDayItemPopup from './calendarDayItemPopup'

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
        {/* <CalendarItemBorderTopStyled />
        <CalendarItemBorderBottomStyled /> */}
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
        {visibleDayPopup &&
          <CalendarDayItemPopup day={day}/>
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