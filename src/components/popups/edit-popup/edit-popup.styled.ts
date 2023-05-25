import styled from '@emotion/styled'
import { css } from "@emotion/react"

export const EditContainerStyled = styled.div(() => css`
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
`)

export const EditPopupStyled = styled.div(() => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`)

export const EditPopupOverlayStyled = styled.div(() => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  z-index: 11;
`)

export const EditPopupContainerStyled = styled.div(() => css`
  position: relative;
  z-index: 12;
  width: 440px;
  margin: 0 auto;
  padding: 50px 20px;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
`)

export const EditPopupInnerStyled = styled.div(() => css`
  display: flex;
`)

export const EditPopupButtonStyled = styled.div(() => css`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  button
    cursor: pointer;
`)

export const EditPopupIconStyled = styled.div(() => css`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`)

export const EditPopupWrapperStyled = styled.div(() => css`
  margin-left: 20px;
`)

export const EditPopupNameStyled = styled.div(() => css`
  margin-bottom: 14px;
`)

export const EditPopupValueStyled = styled.div(() => css`
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  input
    margin-right: 5px
`)

export const EditPopupColorStyled = styled.div(() => css`
  display: flex;
`)

type ColorItemStyledProps = {
  activeColor: boolean
}
export const ColorItemStyled = styled.div<ColorItemStyledProps>(({ activeColor }) => css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  border: 2px solid #c4c4c4;
${activeColor ? 'border: 2px solid white' : ''}
`)