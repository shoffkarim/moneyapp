import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Link } from 'react-router-dom'
import { Toolbar } from '@mui/material'


export const ToolbarStyled = styled(Toolbar)(() => css`
  padding: 10px 0px;
`)
export const NavLinkStyled = styled(Link)(() => css`
  color: #1976d2;
  text-decoration: none;
  width: 100%;
`)

export const RightMenuStyled = styled.div(() => css`
  width: 52px;
  height: 52px;
  position: absolute;
  top: calc(50% - 26px);
  right: 24px;
`)

