import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Button } from '@mui/material'


export const CalendarHeaderStyled = styled.div(() => css`
  display: flex;
  justify-content: space-between;
  background-color: #1565c0;
  padding: 5px 12px;
`)

export const CalendarHeaderWrapperStyled = styled.div(() => css`
  display: flex;
  justify-content: center;
`)

export const CalendarHeaderMainButtonStyled = styled(Button)(() => css`
  color: #fff;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`)

export const CalendarHeaderControlsWrapperStyled = styled.div(() => css`
  display: flex;
`)

export const CalendarHeaderButtonTodayStyled = styled(Button)(() => css`
  color: #fff;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`)
