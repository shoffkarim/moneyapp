import styled from '@emotion/styled'
import { css } from "@emotion/react"

export const ContainerStyled = styled.div(() => css`
  display: grid;
  grid-template-columns: 3fr minmax(450px, 1fr);
  grid-template-areas: 'auto aside';
  gap: 0px 30px;
  min-height: 100vh;
  padding-left: 30px;
`)

export const WrapperStyled = styled.div(() => css`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  gap: 40px 0px;
`)

export const MainStyled = styled.main(() => css``)

export const BtnCloseStyled = styled.button(() => css`
  position: absolute;
  top: 20px;
  right: -40px;
  width: 30px;
  height: 30px;
  z-index: 15;
  cursor: pointer;
  background-color: rgba(0,0,0,0);
  border: none;
  &::before {
    content: "";
    position: absolute;
    top: 14px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #ffffff;
  }
  &::after {
    content: "";
    position: absolute;
    top: 14px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #ffffff;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`)