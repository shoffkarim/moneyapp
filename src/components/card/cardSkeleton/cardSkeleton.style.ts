import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Skeleton } from '@mui/material'

export const CardSkeletonWrapperStyled = styled.div(() => css`
  display: flex;
  flex-direction: column;
`)

export const CardSkeletonCircularStyled = styled(Skeleton)(() => css`
  margin-bottom: 15px;
  margin-top: 15px;
`)