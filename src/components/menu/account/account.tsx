import React from "react";
import './account.sass'
import { Typography } from "@mui/material";

type AccontProps = {
  name?: string
}

export const Account: React.FC<AccontProps> = ({ name }) => {
  return (
      <div className="lk">
        <div className="lk-photo">
          <img src="" alt="" />
        </div>
        <Typography variant="h5">{name}</Typography>
      </div>

  );
};
