import { CalendarItemStyled } from './../calendar.style'
import styled from '@emotion/styled'
import { css } from "@emotion/react"

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
  &:nth-of-type(3n) {
    border-right: 1px solid #c4c4c4;
  }
  &:nth-of-type(-n + 3) {
    border-top: 1px solid #c4c4c4;
  }
`)
