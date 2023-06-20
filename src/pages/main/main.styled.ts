import styled from '@emotion/styled'
import { css } from "@emotion/react"

export const ContainerStyled = styled.div(() => css`
  display: grid;
`)

export const WrapperStyled = styled.div(() => css`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  gap: 60px 0px;
  margin-top: 60px;
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

export const PageWrapperStyled = styled.div(() => css`
  display: flex;
  flex-direction: column;
  max-width: 1480px;
  width: calc(100% - 32px);
  margin: 0 auto;
  padding: 0px 16px;
`)