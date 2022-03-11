import React from 'react'
import './total.sass'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotal } from 'data/actions/total';
import { RootState } from 'data/store';

export const Total: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTotal());
  }, [dispatch]);

  const totalItems = useSelector((state: RootState) => state.Total.total)
  const isLoaded = useSelector((state: RootState) => state.Total.isLoaded)

  return (
    isLoaded && totalItems && (
      <div className='total'>
        <div className='total-item'>
          <p className='total-item__text'>Расходы</p>
          <div className='total-item__wrapper'>
            <p className="total-item__value">{totalItems.expenses}</p>
          </div>
        </div>
        <div className='total-item'>
          <p className='total-item__text'>Доходы</p>
          <div className='total-item__wrapper'>
            <p className="total-item__value">{totalItems.income}</p>
          </div>
        </div>
        <div className='total-item'>
          <p className='total-item__text'>Баланс</p>
          <div className='total-item__wrapper'>
            <p className="total-item__value">{totalItems.balance}</p>
          </div>
        </div>
      </div>
    )
  )
}
