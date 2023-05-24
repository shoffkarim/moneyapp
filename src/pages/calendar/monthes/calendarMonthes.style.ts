import { CalendarItemStyled } from './../calendar.style'
import styled from '@emotion/styled'
import { css } from "@emotion/react"

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
  &:nth-of-type(3n) {
    border-right: 1px solid #c4c4c4;
  }
  &:nth-of-type(-n + 3) {
    border-top: 1px solid #c4c4c4;
  }
`)

