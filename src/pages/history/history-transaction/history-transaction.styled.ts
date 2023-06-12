import { TableRow, Typography } from '@mui/material'
import styled from "@emotion/styled"
import { css } from '@emotion/react'

export const HistoryItemStyled = styled(TableRow)(() => css`
  &:nth-of-type(even) {
    background-color: #fff
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

export const HistoryItemTagItemStyled = styled.ul(() => css`
  padding: 3px 5px;
  background-color: rgba(0,0,0, 0.5);
  border-radius:  25px;
  margin-right: 5px;
  white-space: nowrap;
  margin-bottom: 5px;
`)

type HistoryItemCommentProps = {
  show: string
}
export const HistoryItemCommentStyled = styled(Typography)<HistoryItemCommentProps>(({ show }) => css`
  max-width: 220px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  white-space: ${show};
`)