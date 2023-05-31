import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Link } from 'react-router-dom'

export const MenuStyled = styled.aside(() => css`
  max-width: 450px;
  width: 100%;
  background-color: #c4c4c4;
  grid-area: aside;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
`)

export const MenuContainerStyled = styled.div(() => css`
  padding: 40px 25px;
`)

export const NavLinkStyled = styled(Link)(() => css`
  color: #1976d2;
  text-decoration: none;
`)