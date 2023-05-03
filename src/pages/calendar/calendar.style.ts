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

export const CalendarWrapperModeStyled = styled.div(``)

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
`)

export type DayStyledProps = {
  isAdditionalDay: boolean
  isToday: boolean
  isSelectedDay: boolean
}

export const DayStyled = styled.div<DayStyledProps>(({ isToday, isAdditionalDay, isSelectedDay }) => css`
  display: flex;
  justify-content: center;
  padding: 12px;
  opacity: ${isAdditionalDay ? '0.5' : '1'};
  background-color: transparent;
  ${isToday && 'background-color: #1976d2'};
  ${isSelectedDay && 'background-color: #002884'};
  cursor: pointer;
  &:hover {
    background-color: #3f50b5;
  }
`)

export const MonthesContainerStyled = styled.div(() => css`
  display: grid;
  grid-template-columns: repeat(3, auto);
`)

export type MonthStyledProps = {
  isCurrentMonth: boolean
  isSelectedMonth: boolean
}

export const MonthStyled = styled.div<MonthStyledProps>(({ isCurrentMonth, isSelectedMonth }) => css`
  display: flex;
  justify-content: center;
  padding: 12px;
  background-color: transparent;
  ${isCurrentMonth && 'background-color: #1976d2'};
  ${isSelectedMonth && 'background-color: #002884'};
  cursor: pointer;
  &:hover {
    background-color: #3f50b5;
  }
`)


export const YearsContainerStyled = styled.div(() => css`
  display: grid;
  grid-template-columns: repeat(3, auto);
`)

export type YearsStyledProps = {
  isCurrentYear: boolean
  isSelectedYear: boolean
  isAdditionalYear: boolean
}

export const YearStyled = styled.div<YearsStyledProps>(({ isCurrentYear, isSelectedYear, isAdditionalYear }) => css`
  display: flex;
  justify-content: center;
  padding: 12px;
  opacity: ${isAdditionalYear ? '0.5' : '1'};
  background-color: transparent;
  ${isCurrentYear && 'background-color: #1976d2'};
  ${isSelectedYear && 'background-color: #002884'};
  cursor: pointer;
  &:hover {
    background-color: #3f50b5;
  }
`)