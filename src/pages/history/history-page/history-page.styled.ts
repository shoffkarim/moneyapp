import { css } from '@emotion/react'
import styled from '@emotion/styled'


export const HistoryContainerStyled = styled.div(() => css`
  width: auto;
  height: 100%;
  background-color: #c4c4c4;
  z-index: 12;
  padding: 15px;
`)

export const HistoryWrapperStyled = styled.div(() => css`
  overflow: auto;
  margin-bottom: 20px;
`)

export const HistoryBtnCloseStyled = styled.button(() => css`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
`)