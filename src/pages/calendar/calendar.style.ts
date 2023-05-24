import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Typography } from '@mui/material'


export const CalendarWrapperModeStyled = styled.div(() => css`
  height: 100%;
  position: relative;
`)

export const WeekDaysNameContainerStyled = styled.div(() => css`
  display: grid;
  grid-template-columns: repeat(7, minmax(100px, 200px));
`)

export const WeekDayNameStyled = styled.div(() => css`
  display: flex;
  justify-content: center;
  padding: 12px;
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
  //overflow: hidden;
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



export const CalendarItemNumberStyled = styled(Typography)(() => css`
  padding: 5px 12px 0px 12px;
`)


export const CalendarItemWrapperStyled = styled.div(() => css`
  display: flex;
  padding: 0px 12px;
  margin-top: 20px;
  justify-content: space-around;
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
  flex-direction: column;
`)

export const CalendarItemAdditionalStyled = styled.div(() => css`
  padding: 5px 12px 5px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`)
