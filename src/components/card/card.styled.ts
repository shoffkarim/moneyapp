import styled from '@emotion/styled'
import { css } from "@emotion/react"

type CardStyledProps = {
  isDragging?: boolean
}
export const CardStyled = styled.div<CardStyledProps>(({ isDragging }) => css`
  position: relative;
  cursor: pointer;
  ${isDragging ? 'opacity: 0.4': ''}
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

