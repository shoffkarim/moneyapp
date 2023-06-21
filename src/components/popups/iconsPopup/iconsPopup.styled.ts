import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { PopupContainerStyled } from '../popup.styled'



export const IconPoupContainerStyled = styled(PopupContainerStyled)(({ visible }) => css`
  margin-top: 40px;
  visibility: ${visible ? 'visible' : 'hidden'};
`)

export const IconPopupWrapperStyled = styled.div(() => css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`)

export const IconSelectorItemStyled = styled.label(() => css`
  margin-right: 12px;
  margin-left: 12px;
  margin-bottom: 10px;
  background-color: #1976d2;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`)

export const IconSelectorInputStyled = styled.input(() => css`
  display: none;
`)
