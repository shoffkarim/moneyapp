import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Box } from '@mui/material'

export const ExpensesContainerStyled = styled.div(() => css`
  padding: 10px 20px;
`)

export const ExpensesWrapperStyled = styled.div(() => css`
  display: grid;
  justify-items: start;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 30px 20px;
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