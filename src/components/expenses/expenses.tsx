import React from 'react'
import './expenses.sass'
import { Card } from '../card'
import { useDispatch } from 'react-redux';
import { fetchExpenses } from 'data/actions/expenses';

export const Expenses: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  return (
    <div className='expenses-container'>
      <div className='expenses-wrapper'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
