import React from 'react'
import './total.sass'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotal } from '__data__/actions/total';
import { RootState } from '__data__/store';
import { BiRuble } from 'react-icons/bi';
import { formatMoney } from 'components/utils/format';
import { Typography } from '@mui/material';

export const Total: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTotal());
  }, [dispatch]);

  const totalItems = useSelector((state: RootState) => state.Total.total)
  const isLoaded = useSelector((state: RootState) => state.Total.isLoaded)
  const expensesFormat: string = formatMoney(totalItems.expenses)
  const incomeFormat: string = formatMoney(totalItems.income)
  const balanceFormat: string = formatMoney(totalItems.balance)

  return (
    isLoaded && totalItems && (
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
  )
}
