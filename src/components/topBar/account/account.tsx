import React from "react"
import { Typography } from "@mui/material"
import { LkStyled } from "./account.styled"

type AccontProps = {
  name?: string
}

export const Account: React.FC<AccontProps> = ({ name }) => {
  return (
    <LkStyled>
      <Typography variant="h5">{name}</Typography>
    </LkStyled>
  )
}
