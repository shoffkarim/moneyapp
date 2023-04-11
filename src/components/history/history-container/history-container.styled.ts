import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HistoryPopupStyled = styled.div(() => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`)

export const HistoryPopupOverlayStyled = styled.div(() => css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.6);
  z-index: 11;
`)

export const HistoryPopupContainerStyled = styled.div(() => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #c4c4c4;
  z-index: 12;
  padding: 15px;
`)

export const HistoryPopupWrapperStyled = styled.div(() => css`
  overflow: auto;
  height: calc(100% - 30px);
  margin-bottom: 20px;
`)

export const HistoryPopupBtnCloseStyled = styled.button(() => css`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
`)