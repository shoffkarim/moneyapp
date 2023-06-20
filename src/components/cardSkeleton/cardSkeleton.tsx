import React from 'react'
import { Skeleton } from '@mui/material'
import { CardSkeletonTextStyled, CardSkeletonWrapperStyled } from './cardSkeleton.style'

export const CardSkeleton = () => {
  return (
    <CardSkeletonWrapperStyled>
      <CardSkeletonTextStyled variant="text" sx={{ fontSize: '1.2rem' }}/>
      <Skeleton variant="circular" width="100px" height="100px"/>
    </CardSkeletonWrapperStyled>
  )
}
