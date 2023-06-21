import styled from '@emotion/styled'
import { css } from "@emotion/react"

export const IncomeContainerStyled = styled.div(() => css`
  padding: 10px 20px;
`)

export const IncomeWrapperStyled = styled.div(() => css`
  display: grid;
  grid-auto-flow: column;
  justify-items: start;
  grid-template-columns: repeat(auto-fit, 100px);
  gap: 0px 20px;
`)

