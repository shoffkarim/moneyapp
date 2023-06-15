import styled from '@emotion/styled'
import { css } from "@emotion/react"

export const TotalStyled = styled.div(() => css`
  display: flex;
  margin: 0 auto;
  gap: 30px;
`)

export const TotalItemStyled = styled.div(() => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`)

export const TotalItemWrapperStyled = styled.div(() => css`
  padding: 5px 25px 12px;
  display: flex;
  align-items: center;
  color: #fff;
`)
