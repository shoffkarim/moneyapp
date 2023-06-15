import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { css } from "@emotion/react"

export const AccountsContainerStyled = styled.div(() => css`
  padding: 10px 20px;
`)

export const AccountsWrapperStyled = styled.div(() => css`
  display: grid;
  grid-auto-flow: column;
  justify-items: start;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 0px 20px;
`)

export const BoxStyled = styled(Box)(() => css`
  position: relative;
  border-radius: 0px 10px 10px 10px;
`)

export const BoxLabelStyled = styled.div(() => css`
  position: absolute;
  top: -37px;
  background-color: #1976d2;
  padding: 5px 10px;
  border-radius: 5px 5px 0px 0px;
`)