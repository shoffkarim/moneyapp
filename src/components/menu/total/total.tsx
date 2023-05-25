import React from 'react'
import { BiRuble } from 'react-icons/bi'
import { formatMoney } from 'components/utils/format'
import { Typography } from '@mui/material'
import { TotalItemStyled, TotalStyled, TotalItemWrapperStyled } from './total.styled'

type TotalProps = {
  total?: {
    expenses?:number
    incomes?: number
    balance?: number
  }
}

export const Total: React.FC<TotalProps> = ({ total }) => {
  const expensesFormat: string = formatMoney(total?.expenses)
  const incomeFormat: string = formatMoney(total?.incomes)
  const balanceFormat: string = formatMoney(total?.balance)

  return (
      <TotalStyled>
        <TotalItemStyled>
          <Typography variant="h6">Outcomes</Typography>
          <TotalItemWrapperStyled>
            <Typography variant="h6">{expensesFormat}</Typography>
            <BiRuble fontSize={24}/>
          </TotalItemWrapperStyled>
        </TotalItemStyled>
        <TotalItemStyled>
          <Typography variant="h6">Incomes</Typography>
          <TotalItemWrapperStyled>
            <Typography variant="h6">{incomeFormat}</Typography>
            <BiRuble fontSize={24}/>
          </TotalItemWrapperStyled>
        </TotalItemStyled>
        <TotalItemStyled>
          <Typography variant="h6">Balance</Typography>
          <TotalItemWrapperStyled>
            <Typography variant="h6">{balanceFormat}</Typography>
            <BiRuble fontSize={24}/>
          </TotalItemWrapperStyled>
        </TotalItemStyled>
      </TotalStyled>

  )
}
