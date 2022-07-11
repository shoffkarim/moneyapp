import React from "react";
import './account.sass'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from 'data/actions/user';
import { RootState } from "data/store";
import { Typography } from "@mui/material";

export const Account: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const userItem = useSelector((state: RootState) => state.User.user)
  const isLoaded = useSelector((state: RootState) => state.User.isLoaded)

  return (
    isLoaded && userItem && (
      <div className="lk">
        <div className="lk-photo">
          <img src="" alt="" />
        </div>
        <Typography variant="h5">{userItem.name}</Typography>
      </div>
    )
  );
};
