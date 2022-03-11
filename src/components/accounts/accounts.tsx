import React from 'react'
import './accounts.sass'
import { Card } from '../card'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts } from 'data/actions/accounts';
import { RootState } from 'data/store';
import { ICard } from 'components/card/card';

export const Accounts: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  const items = useSelector((state: RootState) => state.Accounts.items)
  const isLoaded = useSelector((state:RootState) => state.Accounts.isLoaded)

  return (
    <div className='accounts-container'>
      <div className='accounts-wrapper'>
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
