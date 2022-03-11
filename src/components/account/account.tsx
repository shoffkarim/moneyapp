import React from "react";
import './account.sass'
import { useDispatch } from 'react-redux';
import { fetchUser } from 'data/actions/user';

export const Account: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <div className="lk">
      <div className="lk-photo">
        <img src="" alt="" />
      </div>
      <p className="lk-name">Карим Шарафутдинов</p>
    </div>
  );
};
