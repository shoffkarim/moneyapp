import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Button, IconButton } from '@mui/material'



export const PopupStyled = styled.form(() => css`
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

export const PopupOverlayStyled = styled.div(() => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  z-index: 11;
`)

type PopupContainerStyledProps = {
  visible?: boolean
}

export const PopupContainerStyled = styled.div<PopupContainerStyledProps>(() => css`
  position: relative;
  z-index: 12;
  width: 440px;
  margin: 0 auto;
  padding: 35px 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`)

export const PopupFormStyled = styled.div(() => css`
  display: flex;
  flex-direction: column;
`)

export const PopupFormContainerStyled = styled.div(() => css`
  display: flex;
`)

export const PopupIconStyled = styled.div(() => css`
  width: 100px;
  min-width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`)

export const PopupWrapperStyled = styled.div(() => css`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
`)

export const PopupElementWrapperStyled = styled.div(() => css`
  margin-bottom: 20px;
`)

export const PopupButtonStyled = styled(Button)(() => css`
  margin: 20px auto 0px auto;
  max-width: 200px;
`)

export const PopupCloseButtonStyled = styled(IconButton)(() => css`
  position: absolute;
  top: -15px;
  right: -60px;
  z-index: 50;
`)


export const PopupColorsWrapperStyled = styled.div(() => css`
  display: flex;
  flex-wrap: wrap;
  max-width: 232px;
`)

type ColorLabelStyledProps = {
  active: boolean
  color: string
}

export const ColorLabelStyled = styled.label<ColorLabelStyledProps>(({ active, color }) => css`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  border: 2px solid #fff;
  background-color: ${color};
  border-color: ${active ? '#1976d2' : '#fff'};
`)

export const ColorInputStyled = styled.input(() => css`
  display: none;
`)
