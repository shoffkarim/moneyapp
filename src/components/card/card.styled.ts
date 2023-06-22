import styled from '@emotion/styled'
import { css } from "@emotion/react"


export const CardEditContainerStyled = styled.button(() => css`
  position: absolute;
  top: 45px;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  padding: 0;
  visibility: hidden;
  opacity: 0;
`)

type CardStyledProps = {
  isDragging?: boolean
}
export const CardStyled = styled.div<CardStyledProps>(({ isDragging }) => css`
  position: relative;
  cursor: pointer;
  ${isDragging ? 'opacity: 0.4': ''}
  &:hover {
    ${CardEditContainerStyled} {
      visibility: visible;
      opacity: 1;
    }
  }
`)

export const CardWrapperStyled = styled.div(() => css`
  display: flex;
  flex-direction: column;
  align-items: center;
`)

export const CardNameStyled = styled.div(() => css`
  font-size: 18px;
  margin: 10px 0px 0px;
`)

export const CardValueStyled = styled.div(() => css`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 10px 0px 0px;
`)

export const CardIconStyled = styled.div(() => css`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`)


