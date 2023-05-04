import styled from '@emotion/styled';
import { css } from "@emotion/react";

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
  grid-template-rows: repeat(auto-fill, minmax(50px, 165px));
  height: 100%;
`)

export const CalendarItemStyled = styled.div(() => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #c4c4c4;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  background-color: transparent;
  max-height: 165px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: #3f50b5;
    color: #ffffff;
    border-color: #3f50b5;
  }
`)

export type DayStyledProps = {
  isAdditionalDay: boolean
  isToday: boolean
  isSelectedDay: boolean
}

export const DayStyled = styled(CalendarItemStyled)<DayStyledProps>(({ isToday, isAdditionalDay, isSelectedDay }) => css`
  opacity: ${isAdditionalDay ? '0.5' : '1'};
  ${isToday && `
    background-color: #1976d2;
    color: #ffffff;
    border-color: #1976d2;
  `};
  ${isSelectedDay && `
    background-color: #002884;
    color: #ffffff;
    border-color: #002884;
  `};
  &:nth-child(7n) {
    border-right: 1px solid #c4c4c4;
  }
  &:nth-child(-n + 7) {
    border-top: 1px solid #c4c4c4;
  }
`)

export const CalendarItemNumber = styled.span(() => css`
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