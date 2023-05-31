import { CalendarItemStyled, CalendarItemBorderBottomStyled, CalendarItemBorderTopStyled, CalendarItemNumberStyled } from './../calendar.style'
import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Typography } from '@mui/material'

export const DaysContainerStyled = styled.div(() => css`
  display: grid;
  grid-template-columns: repeat(7, minmax(100px, 200px));
  grid-template-rows: repeat(auto-fill, minmax(50px, 175px));
  height: 100%;
`)

export type DayStyledProps = {
  isAdditionalDay: boolean
  isToday: boolean
  isSelectedDay: boolean
}
// TODO: create good styles for borders
export const DayStyled = styled(CalendarItemStyled)<DayStyledProps>(({ isToday, isAdditionalDay, isSelectedDay }) => css`
  opacity: ${isAdditionalDay ? '0.5' : '1'};
  position: relative;
  &:nth-of-type(7n) {
    ${CalendarItemBorderBottomStyled} {
      &::after {
        background-color: #c4c4c4;
      }
    }
  }
  &:nth-of-type(-n + 7) {
    ${CalendarItemBorderTopStyled} {
      &::before {
        background-color: #c4c4c4;
      }
    }
  }
//weekends
  &:nth-of-type(7n - 1), &:nth-of-type(7n) {
    background-color: rgba(245, 107, 98, 0.5);
    ${DayItemHaveMore} {
      color: #ffffff;
    }
  }

  ${isToday && `
    background-color: #1976d2;
    color: #ffffff;

    &:nth-of-type(7n - 1), &:nth-of-type(7n) {
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
    &:nth-of-type(7n) {
      ${CalendarItemBorderBottomStyled} {
        &::after {
          background-color: #1976d2;
        }
      }
    }
    &:nth-of-type(-n + 7) {
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
    &:nth-of-type(7n - 1), &:nth-of-type(7n) {
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
    &:nth-of-type(7n) {
      ${CalendarItemBorderBottomStyled} {
        &::after {
          background-color: #002884;
        }
      }
    }
    &:nth-of-type(-n + 7) {
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

export const DayItemsList = styled.ul(() => css`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 5px;

`)

type DayItemProps = {
  backgroundColor: string
}

export const DayItem = styled.li<DayItemProps>(({ backgroundColor }) => css`
  background-color: ${backgroundColor};
  color: #ffffff;
  padding: 0px 12px;
  margin-bottom: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`)

export const DayItemTextStyled = styled(Typography)(() => css`
  max-width: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 5px;
`)

export const DayItemHaveMore = styled.div(`
  margin-top: auto;
  padding: 0px 0px 0px 12px;
  color: #c4c4c4;
`)

export const DayItemPopupStyled = styled.div(() => css`
  position: absolute;
  top: -20px;
  left: calc(50% - 110px);
  z-index: 20;
  background-color: #002884;
  width: 220px;
  height: 250px;
  ${CalendarItemNumberStyled} {
    color: #ffffff
  }
`)

export const DayItemPopupOverlayStyled = styled.span(() => css`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0);
  z-index: 15;
  width: 100%;
  height: 100%;
`)

export const DayContainerStyled = styled.div(``)

export const DayTotalContainerStyled = styled.div(`
  display: flex;
  justify-content: space-between;
  padding: 0px 12px;
  margin: 10px 0px;
`)