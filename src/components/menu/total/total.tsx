import React from 'react'
import './total.sass'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotal } from '__data__/actions/total';
import { RootState } from '__data__/store';
import { BiRuble } from 'react-icons/bi';
import { formatMoney } from 'components/utils/format';

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
          <p className='total-item__text'>Расходы</p>
          <div className='total-item__wrapper'>
            <p className="total-item__value">{expensesFormat}</p>
            <BiRuble fontSize={24}/>
          </div>
        </div>
        <div className='total-item'>
          <p className='total-item__text'>Доходы</p>
          <div className='total-item__wrapper'>
            <p className="total-item__value">{incomeFormat}</p>
            <BiRuble fontSize={24}/>
          </div>
        </div>
        <div className='total-item'>
          <p className='total-item__text'>Баланс</p>
          <div className='total-item__wrapper'>
            <p className="total-item__value">{balanceFormat}</p>
            <BiRuble fontSize={24}/>
          </div>
        </div>
      </div>
    )
  )
}
