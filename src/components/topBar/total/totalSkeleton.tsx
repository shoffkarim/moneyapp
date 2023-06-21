import React from 'react'
import { Skeleton, Typography } from '@mui/material'
import { TotalItemStyled, TotalItemWrapperStyled, TotalStyled } from './total.styled'

export const TotalSkeleton = () => {
  return (
    <TotalStyled>
      <TotalItemStyled>
        <Typography variant="h5" fontSize={20}>Outcomes</Typography>
        <TotalItemWrapperStyled>
          <Skeleton variant='rounded' width={100} height={20}/>
        </TotalItemWrapperStyled>
      </TotalItemStyled>
      <TotalItemStyled>
        <Typography variant="h5" fontSize={20}>Incomes</Typography>
        <TotalItemWrapperStyled>
          <Skeleton variant='rounded' width={100} height={20}/>
        </TotalItemWrapperStyled>
      </TotalItemStyled>
      <TotalItemStyled>
        <Typography variant="h5" fontSize={20}>Balance</Typography>
        <TotalItemWrapperStyled>
          <Skeleton variant='rounded' width={100} height={20}/>
        </TotalItemWrapperStyled>
      </TotalItemStyled>
    </TotalStyled>
  )
}
