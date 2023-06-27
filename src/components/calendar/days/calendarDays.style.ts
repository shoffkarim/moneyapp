import { CalendarItemStyled } from '../calendar.style'
import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { IconButton, Typography } from '@mui/material'

export const DaysContainerStyled = styled.div(() => css`
  display: grid;
  grid-template-columns: repeat(7, minmax(100px, 215px));
  grid-auto-rows: minmax(100px, 175px);
  height: 100%;
`)

export type DayStyledProps = {
  isAdditionalDay?: boolean
  isToday?: boolean
  isSelectedDay?: boolean
}
export const DayStyled = styled(CalendarItemStyled)<DayStyledProps>(() => css`
  position: relative;

  &:nth-of-type(7n) {
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #e0e0e0;
  }

  &:nth-last-of-type(-n + 7) {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e0e0e0;
  }

//weekends
  &:nth-of-type(7n - 1), &:nth-of-type(7n) {
    background-color: rgba(245, 107, 98, 0.5);
    ${DayItemHaveMore} {
      color: #ffffff;
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


export const DayItemPopupContainer = styled.div(() => css`
  width: 800px;
  height: auto;
  background-color: #fff;
  position: relative;
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
  padding: 10px 118px 10px 12px;
  color: #000;
  box-shadow: 0px -8px 11px 0px rgba(0, 0, 0, 0.26);
`)


export const DayItemPopupStyled = styled.li<DayItemProps>(({ backgroundColor }) => css`
  background-color: ${backgroundColor};
  color: #ffffff;
  padding: 10px 12px;
  margin-bottom: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    margin-bottom: 0px;
  }
`)

export const DayItemActionsPopupStyled = styled.div(() => css`
  display: flex;
  margin-left: 20px;
`)

export const DayItemWrapperPopupStyled = styled.div(() => css`
  display: flex;
  align-items: center;
`)

export const DayItemActionStyled = styled(IconButton)(() => css`
  display: flex;
  width: 43px;
  &:last-child {
    margin-right: 0px;
  }
`)

export const DayItemPopupClose = styled(IconButton)(() => css`
  position: absolute;
  top: -15px;
  right: -60px;
  z-index: 50;
`)

export const DayItemDateStyled = styled(Typography)(() => css`
  color: #000;
`)

export const DayItemTopPopupStyled = styled.div(() => css`
  display: flex;
  padding: 5px 12px;
  margin-bottom: 20px;
`)

export const DayItemsListPopupStyled = styled.ul(() => css`
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 500px;
  overflow-y: auto;
`)

export const DayItemInfoWrapperPopupStyled = styled.div(() => css`
  display: flex;
  flex-direction: column;
`)

type DayItemCommentPopupProps = {
  show: string
}

export const DayItemCommentPopupStyled = styled(Typography)<DayItemCommentPopupProps>(({ show }) => css`
  max-width: 335px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  white-space: ${show};
`)

export const DayItemTagListStyled = styled.ul(() => css`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  max-width: 335px;
`)

export const DayItemTagItemStyled = styled.li(() => css`
  padding: 5px 10px;
  background-color: #fff;
  color: #1976d2;
  border-radius: 25px;
  margin-right: 5px;
  margin-bottom: 3px;
  transition: 0.4s linear;
  &:last-child {
    margin-right: 0px;
  };
`)