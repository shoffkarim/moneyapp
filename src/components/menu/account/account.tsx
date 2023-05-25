import React from "react"
import { Typography } from "@mui/material"
import { LkPhotoStyled, LkStyled } from "./account.styled"

type AccontProps = {
  name?: string
}

export const Account: React.FC<AccontProps> = ({ name }) => {
  return (
      <LkStyled>
        <LkPhotoStyled>
          <img src="" alt="" />
        </LkPhotoStyled>
        <Typography variant="h5">{name}</Typography>
      </LkStyled>

  )
}
