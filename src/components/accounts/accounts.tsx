import React from 'react'
import './accounts.sass'
import { Card } from '../card'
import { useDispatch } from 'react-redux';
import { fetchAccounts } from 'data/actions/accounts';

export const Accounts: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);
  return (
    <div className='accounts-container'>
      <div className='accounts-wrapper'>
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/> */}
      </div>
    </div>
  )
}
