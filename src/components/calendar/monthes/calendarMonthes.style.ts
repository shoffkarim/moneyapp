import { CalendarItemNumberStyled, CalendarItemStyled } from '../calendar.style'
import styled from '@emotion/styled'
import { css } from "@emotion/react"

export const MonthesContainerStyled = styled.div(() => css`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, auto));
  grid-auto-rows: minmax(100px, 175px);
  height: 100%;
`)


export const MonthStyled = styled(CalendarItemStyled)(() => css`

  &:nth-of-type(3n) {
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #e0e0e0;
  }

  &:nth-last-of-type(-n + 3) {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e0e0e0;
  }

  ${CalendarItemNumberStyled} {
    width: 40px;
    height: 40px;
  }
`)

