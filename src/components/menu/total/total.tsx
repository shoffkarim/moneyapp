import React from 'react'
import './total.sass'
import { BiRuble } from 'react-icons/bi';
import { formatMoney } from 'components/utils/format';
import { Typography } from '@mui/material';

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
      <div className='total'>
        <div className='total-item'>
          <Typography variant="h6">Расходы</Typography>
          <div className='total-item__wrapper'>
            <Typography variant="h6">{expensesFormat}</Typography>
            <BiRuble fontSize={24}/>
          </div>
        </div>
        <div className='total-item'>
          <Typography variant="h6">Доходы</Typography>
          <div className='total-item__wrapper'>
            <Typography variant="h6">{incomeFormat}</Typography>
            <BiRuble fontSize={24}/>
          </div>
        </div>
        <div className='total-item'>
          <Typography variant="h6">Баланс</Typography>
          <div className='total-item__wrapper'>
            <Typography variant="h6">{balanceFormat}</Typography>
            <BiRuble fontSize={24}/>
          </div>
        </div>
      </div>

  )
}
