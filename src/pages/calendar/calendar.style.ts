import styled from '@emotion/styled';
import { css } from "@emotion/react";
import { Typography } from '@mui/material';

export const CalendarHeaderStyled = styled.div(() => css`
  display: flex;
  justify-content: space-between;
  background-color: #c4c4c4;
`)

export const CalendarHeaderWrapperStyled = styled.div(() => css`
  display: flex;
  justify-content: center;
`)

export const CalendarWrapperModeStyled = styled.div(() => css`
  height: 100%;
  position: relative;
`)

export const WeekDaysNameContainerStyled = styled.div(() => css`
  display: grid;
  grid-template-columns: repeat(7, auto);
`)

export const WeekDayNameStyled = styled.div(() => css`
  display: flex;
  justify-content: center;
  padding: 12px;
`)

export const DaysContainerStyled = styled.div(() => css`
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: repeat(auto-fill, minmax(50px, 175px));
  height: 100%;
`)

export const CalendarItemBorderTopStyled = styled.div(() => css`
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #c4c4c4;
  }
  &::after {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #c4c4c4;
  }
`)

export const CalendarItemBorderBottomStyled = styled.div(() => css`
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #c4c4c4;
  }
  &::after {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #c4c4c4;
  }
`)

export const CalendarItemStyled = styled.div(() => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #3f50b5;
    color: #ffffff;
  }
  ${CalendarItemBorderBottomStyled} {
    &::after {
      background-color: transparent;
    }
  }
  ${CalendarItemBorderTopStyled} {
    &::before {
      background-color: transparent;
    }
  }
`)

export type DayStyledProps = {
  isAdditionalDay: boolean
  isToday: boolean
  isSelectedDay: boolean
}
// TODO: create good styles for borders
export const DayStyled = styled(CalendarItemStyled)<DayStyledProps>(({ isToday, isAdditionalDay, isSelectedDay }) => css`
  opacity: ${isAdditionalDay ? '0.5' : '1'};

  &:nth-child(7n) {
    ${CalendarItemBorderBottomStyled} {
      &::after {
        background-color: #c4c4c4;
      }
    }
  }
  &:nth-child(-n + 7) {
    ${CalendarItemBorderTopStyled} {
      &::before {
        background-color: #c4c4c4;
      }
    }
  }
//weekends
  &:nth-child(7n - 1), &:nth-child(7n) {
    background-color: rgba(245, 107, 98, 0.5);
    ${DayItemHaveMore} {
      color: #ffffff;
    }
  }

  ${isToday && `
    background-color: #1976d2;
    color: #ffffff;

    &:nth-child(7n - 1), &:nth-child(7n) {
      background-color: #1976d2
    }

    ${CalendarItemBorderBottomStyled} {
      &::after {
        background-color:  #1976d2;
      }
      &::before {
        background-color:  #1976d2;
      }
    }
    ${CalendarItemBorderTopStyled} {
      &::before {
        background-color:  #1976d2;
      }
      &::after {
        background-color:  #1976d2;
      }
    }
    &:nth-child(7n) {
      ${CalendarItemBorderBottomStyled} {
        &::after {
          background-color: #1976d2;
        }
      }
    }
    &:nth-child(-n + 7) {
      ${CalendarItemBorderTopStyled} {
        &::before {
          background-color: #1976d2;
        }
      }
    }
  `};
  ${isSelectedDay && `
    background-color: #002884;
    color: #ffffff;
    &:nth-child(7n - 1), &:nth-child(7n) {
      background-color: #002884
    }
    ${CalendarItemBorderBottomStyled} {
      &::after {
        background-color:  #002884;
      }
      &::before {
        background-color:  #002884;
      }
    }
    ${CalendarItemBorderTopStyled} {
      &::before {
        background-color:  #002884;
      }
      &::after {
        background-color:  #002884;
      }
    }
    &:nth-child(7n) {
      ${CalendarItemBorderBottomStyled} {
        &::after {
          background-color: #002884;
        }
      }
    }
    &:nth-child(-n + 7) {
      ${CalendarItemBorderTopStyled} {
        &::before {
          background-color: #002884;
        }
      }
    }
  `};


  &:hover {
    background-color: #3f50b5;
    color: #ffffff;
    ${CalendarItemBorderBottomStyled} {
      &::after {
        background-color:  #3f50b5;
      }
      &::before {
        background-color:  #3f50b5;
      }
    }
    ${CalendarItemBorderTopStyled} {
      &::before {
        background-color:  #3f50b5;
      }
      &::after {
        background-color:  #3f50b5;
      }
    }
  }
`)

export const CalendarItemNumberStyled = styled(Typography)(() => css`
  padding: 12px 12px 0px 12px;
`)

export const MonthesContainerStyled = styled.div(() => css`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(auto-fill, minmax(50px, 165px));
  height: 100%;
`)

export type MonthStyledProps = {
  isCurrentMonth: boolean
  isSelectedMonth: boolean
}

export const MonthStyled = styled(CalendarItemStyled)<MonthStyledProps>(({ isCurrentMonth, isSelectedMonth }) => css`
  ${isCurrentMonth && `
    background-color: #1976d2;
    color: #ffffff;
  `};
  ${isSelectedMonth && `
    background-color: #002884;
    color: #ffffff;
  `};
  &:nth-child(3n) {
    border-right: 1px solid #c4c4c4;
  }
  &:nth-child(-n + 3) {
    border-top: 1px solid #c4c4c4;
  }
`)


export const YearsContainerStyled = styled.div(() => css`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(auto-fill, minmax(50px, 165px));
  height: 100%;
`)

export type YearsStyledProps = {
  isCurrentYear: boolean
  isSelectedYear: boolean
  isAdditionalYear: boolean
}

export const YearStyled = styled(CalendarItemStyled)<YearsStyledProps>(({ isCurrentYear, isSelectedYear, isAdditionalYear }) => css`
  opacity: ${isAdditionalYear ? '0.5' : '1'};
  ${isCurrentYear && `
    background-color: #1976d2;
    color: #ffffff;
  `};
  ${isSelectedYear && `
    background-color: #002884;
    color: #ffffff;
  `};
  &:nth-child(3n) {
    border-right: 1px solid #c4c4c4;
  }
  &:nth-child(-n + 3) {
    border-top: 1px solid #c4c4c4;
  }
`)

export const DayItemsList = styled.ul(() => css`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 20px;

`)
type DayItemProps = {
  backgroundColor: string
}
export const DayItem = styled.li<DayItemProps>(({ backgroundColor }) => css`
  background-color: ${backgroundColor};
  color: #ffffff;
  padding: 0px 12px;
  margin-bottom: 2px;
`)

export const DayItemHaveMore = styled.div(`
  margin-top: auto;
  padding: 0px 0px 0px 12px;
  color: #c4c4c4;
`)

export const CalendarItemWrapperStyled = styled.div(() => css`
  display: flex;
  padding: 0px 12px;
  margin-top: 20px;
  justify-content: space-around
`)

export const CalendarItemInfoStyled = styled.div(() => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  &:last-child {
    margin-right: 0px;
  }
`)

export const CalendarItemTopStyled = styled.div(() => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`)

export const CalendarItemAdditionalStyled = styled.div(() => css`
  padding: 12px 12px 0px 12px;
`)

