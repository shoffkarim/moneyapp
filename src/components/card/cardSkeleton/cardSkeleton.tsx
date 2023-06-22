import React from 'react'
import { Skeleton } from '@mui/material'
import { CardSkeletonCircularStyled, CardSkeletonWrapperStyled } from './cardSkeleton.style'

export const CardSkeleton = () => {
  return (
    <CardSkeletonWrapperStyled>
      <Skeleton variant="text" sx={{ fontSize: '1.2rem' }}/>
      <CardSkeletonCircularStyled variant="circular" width="100px" height="100px"/>
      <Skeleton variant="text" height={30}/>
    </CardSkeletonWrapperStyled>
  )
}
