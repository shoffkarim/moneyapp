import React from 'react'
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
      <div>
      {state.mode === 'days' && (
        <p onClick={() => functions.setMode('monthes')}>
          {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
        </p>
      )}
      {state.mode === 'monthes' && (
        <p onClick={() => functions.setMode('years')}>
          {state.selectedYear}
        </p>
      )}
      {state.mode === 'years' && (
        <p onClick={() => functions.setMode('days')}>
          {state.selectedYearsInterval[0]}  -  {state.selectedYearsInterval[state.selectedYearsInterval.length - 1]}
        </p>
      )}
      </div>
      <div>
        {state.mode === 'days' && (
          <div>
            {state.weekDaysNames.map((weekDaysName) => (
              <span key={weekDaysName.dayShort}>{weekDaysName.dayShort}</span>
            ))}
          </div>
        )}
      </div>
      <div>
        {state.calendarDays.map((day) => {
          const today = checkIsToday(day.date)
          const isSelectedDay = checkDateIsEqual(day.date, state.selectedDate.date)
          const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex
          return (
            <span
              key={`${day.dayNumber}-${day.monthIndex}`}
              onClick={() => {
                functions.setSelectedDate(day)
                selectDate(day.date)
              }}
            >
              {day.dayNumber}
            </span>
          )
        })}
      </div>
    </div>
  )
}
