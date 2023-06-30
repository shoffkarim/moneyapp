import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Typography } from '@mui/material'


export const CalendarWrapperModeStyled = styled.div(() => css`
  height: 100%;
  position: relative;
`)

export const WeekDaysNameContainerStyled = styled.div(() => css`
  display: grid;
  grid-template-columns: repeat(7, minmax(100px, 215px));
`)

export const WeekDayNameStyled = styled.div(() => css`
  display: flex;
  justify-content: center;
  padding: 12px;
`)


export const CalendarItemStyled = styled.div(() => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: transparent;

  border-left-width: 1px;
    border-left-style: solid;
    border-left-color: #e0e0e0;

    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #e0e0e0;

  cursor: pointer;
  position: relative;

`)


type CalendarItemNumberStyledProps = {
  isToday: boolean
  isSelectedDay: boolean
  isAdditionalDay: boolean
}
export const CalendarItemNumberStyled = styled(Typography, { shouldForwardProp: prop => prop !== 'isToday' && prop !== 'isSelectedDay' && prop !== 'isAdditionalDay' })<CalendarItemNumberStyledProps>(({ isToday, isSelectedDay, isAdditionalDay }) => css`
  margin: 3px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${isToday || isSelectedDay ? '#fff' : '#000'};
  color: ${isAdditionalDay && 'rgba(0,0,0, 0.5)'};
  ${isToday ? "background-color: red" : 'background-color: transparent'};
  ${isSelectedDay && !isToday && 'background-color : #616161'};
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
  flex-direction: row;
  justify-content: space-between;
`)

export const CalendarItemAdditionalStyled = styled.div(() => css`
  padding: 0px 12px 5px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`)
