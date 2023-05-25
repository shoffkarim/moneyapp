import styled from '@emotion/styled'
import { css } from "@emotion/react"

export const IconSelectorContainerStyled = styled.div(() => css`
  position: relative;
  z-index: 12;
  width: 440px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 50px 20px;
  background-color: #c4c4c4;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`)

export const IconSelectorItemStyled = styled.div(() => css`
  margin-right: 12px;
  margin-left: 12px;
  margin-bottom: 10px;
  cursor: pointer;
`)