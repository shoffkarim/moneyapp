import React, { useCallback, useEffect, useState } from 'react'
import { BiDollar } from 'react-icons/bi'
import { formatMoney } from 'components/utils/format'
import { Typography } from '@mui/material'
import { TotalItemStyled, TotalStyled, TotalItemWrapperStyled } from './total.styled'
import { useQuery } from '@apollo/client'
import { GET_USER_TOTAL } from '__data__/queries/total'

type TotalProps = {
  total?: {
    expenses?:number
    incomes?: number
    balance?: number
  }
}

export const Total: React.FC<TotalProps> = ({ total }) => {

  const expensesFormat: string | boolean = formatMoney(total?.expenses)
  const incomeFormat: string | boolean = formatMoney(total?.incomes)
  const balanceFormat: string | boolean = formatMoney(total?.balance)

  return (
    <TotalStyled>
      <TotalItemStyled>
        <Typography variant="h5" fontSize={20}>Outcomes</Typography>
        <TotalItemWrapperStyled>
          <Typography variant="h5" fontSize={22}>{expensesFormat}</Typography>
          <BiDollar fontSize={22}/>
        </TotalItemWrapperStyled>
      </TotalItemStyled>
      <TotalItemStyled>
        <Typography variant="h5" fontSize={20}>Incomes</Typography>
        <TotalItemWrapperStyled>
          <Typography variant="h5" fontSize={22}>{incomeFormat}</Typography>
          <BiDollar fontSize={22}/>
        </TotalItemWrapperStyled>
      </TotalItemStyled>
      <TotalItemStyled>
        <Typography variant="h5" fontSize={20}>Balance</Typography>
        <TotalItemWrapperStyled>
          <Typography variant="h5" fontSize={22}>{balanceFormat}</Typography>
          <BiDollar fontSize={22}/>
        </TotalItemWrapperStyled>
      </TotalItemStyled>
    </TotalStyled>

  )
}
