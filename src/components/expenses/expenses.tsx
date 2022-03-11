import React from 'react'
import './expenses.sass'
import { Card } from '../card'
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses } from 'data/actions/expenses';
import { RootState } from 'data/store';
import { ICard } from 'components/card/card';

export const Expenses: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const items = useSelector((state: RootState) => state.Expenses.items)
  const isLoaded = useSelector((state:RootState) => state.Expenses.isLoaded)

  return (
    <div className='expenses-container'>
      <div className='expenses-wrapper'>
      {isLoaded && items.map((item: ICard) =>
          <Card
            id={item.id}
            name={item.name}
            icon={item.icon}
            color={item.color}
            value={item.value}
          />
        )}
      </div>
    </div>
  )
}
