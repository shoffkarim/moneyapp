import React from 'react'
import { Income, Accounts, Expenses, Menu } from 'components'
import './main.sass'
import { useDispatch } from 'react-redux';
import { fetchUser } from 'data/actions/user';

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <div className='container'>
      <main className='main'>
        <div className='wrapper'>
          <Income/>
          <Accounts/>
          <Expenses/>
        </div>
      </main>
      <Menu/>
    </div>
  )
}