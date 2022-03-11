import React from 'react'
import './income.sass'
import { Card } from '../card'
import { useDispatch } from 'react-redux';
import { fetchIncomes } from 'data/actions/incomes';

export const Income: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchIncomes());
  }, [dispatch]);

  return (
    <div className='income-container'>
      <div className='income-wrapper'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
