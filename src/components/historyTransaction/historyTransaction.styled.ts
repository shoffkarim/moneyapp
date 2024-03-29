import { IconButton, Skeleton, TableCell, TableRow, Typography } from '@mui/material'
import styled from "@emotion/styled"
import { css } from '@emotion/react'

export const HistoryItemStyled = styled(TableRow)(() => css`
  &:nth-of-type(even) {
    background-color: #fff
  }
  &:nth-of-type(odd) {
    background-color: #1976d2;
  }
`)

export const HistoryItemCellStyled = styled.div(() => css`
  display: flex;
  align-items: center;
`)

type HistoryItemIconStyledProps = {
  background: string
}
export const HistoryItemIconStyled = styled.div<HistoryItemIconStyledProps>(({ background }) => css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`)

export const HistoryItemTagListStyled = styled.ul(() => css`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  max-width: 220px;
`)

type HistoryItemTagItemStyledProps = {
  white: boolean
}

export const HistoryItemTagItemStyled = styled('li', { shouldForwardProp: prop => prop !== 'white' })<HistoryItemTagItemStyledProps>(({ white }) => css`
  padding: 5px 10px;
  background-color: ${white ? "#fff" : "#1976d2"};
  color: ${white ? "#1976d2" : "#fff"};
  border-radius: 25px;
  margin-right: 5px;
  margin-bottom: 3px;
  cursor: pointer;
  transition: 0.4s linear;
  &:last-child {
    margin-right: 0px;
  };
`)

type HistoryItemCommentProps = {
  show: string
  white: boolean
}
export const HistoryItemCommentStyled = styled(Typography, { shouldForwardProp: prop => prop !== 'white' && prop !== 'show' })<HistoryItemCommentProps>(({ show, white }) => css`
  max-width: 220px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  white-space: ${show};
  color: ${white ? '#fff' : '#000'};
`)

export const HistoryItemCircularSkeletonStyled = styled(Skeleton)(() => css`
  margin-right: 10px;
`)

type HistoryItemDateStyledProps = {
  white: boolean
}

export const HistoryItemTextStyled = styled(Typography, { shouldForwardProp: prop => prop !== 'white' })<HistoryItemDateStyledProps>(({ white }) => css`
  color: ${white ? '#fff' : '#000'};
`)

export const HistoryItemValueMobileStyled = styled(HistoryItemTextStyled)(() => css`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
  }
`)

export const TableCellValueStyled = styled(TableCell)(() => css`
  @media screen and (max-width: 900px) {
    display: none
  }
`)

export const HistoryItemActionsWrapper = styled.div(() => css`
  display: flex;
`)


export const HistoryItemAction = styled(IconButton)(() => css`
  display: flex;
  width: 43px;
  margin-right: 10px;
`)