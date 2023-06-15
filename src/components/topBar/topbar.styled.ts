import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Link } from 'react-router-dom'

export const NavLinkStyled = styled(Link)(() => css`
  color: #1976d2;
  text-decoration: none;
`)

export const RightMenuStyled = styled.div(() => css`
  width: 52px;
  height: 52px;
  position: absolute;
  top: calc(50% - 26px);
  right: 24px;
`)

