import React from 'react'
import { Skeleton, Typography } from '@mui/material'
import { TotalItemStyled, TotalItemWrapperStyled, TotalStyled } from './total.styled'
import { BALANCE, EXPENSES, INCOMES } from 'components/constants'

export const TotalSkeleton = () => {
  return (
    <TotalStyled>
      <TotalItemStyled>
        <Typography variant="h5" fontSize={18}>{INCOMES.toLocaleUpperCase()}</Typography>
        <TotalItemWrapperStyled>
          <Skeleton variant='rounded' width={100} height={20}/>
        </TotalItemWrapperStyled>
      </TotalItemStyled>
      <TotalItemStyled>
        <Typography variant="h5" fontSize={18}>{EXPENSES.toLocaleUpperCase()}</Typography>
        <TotalItemWrapperStyled>
          <Skeleton variant='rounded' width={100} height={20}/>
        </TotalItemWrapperStyled>
      </TotalItemStyled>
      <TotalItemStyled>
        <Typography variant="h5" fontSize={18}>{BALANCE.toLocaleUpperCase()}</Typography>
        <TotalItemWrapperStyled>
          <Skeleton variant='rounded' width={100} height={20}/>
        </TotalItemWrapperStyled>
      </TotalItemStyled>
    </TotalStyled>
  )
}
