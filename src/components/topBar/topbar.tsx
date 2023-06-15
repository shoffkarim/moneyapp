import React from 'react'
import { Total } from 'components'
import { NavLinkStyled, RightMenuStyled } from './topbar.styled'
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

type TopBarProps = {
  name?: string
  total?: {
    expenses?:number
    incomes?: number
    balance?: number
  }
}
export const TopBar: React.FC<TopBarProps> = ({ total }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='relative'>
      <Toolbar>
        <Total total={total}/>
        <RightMenuStyled>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <NavLinkStyled to={'/'}>Main</NavLinkStyled>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLinkStyled to={'/history'}>History</NavLinkStyled>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLinkStyled to={'/calendar'}>Calendar</NavLinkStyled>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLinkStyled to={'/signup'}>Sign up</NavLinkStyled>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLinkStyled to={'/signin'}>Sign in</NavLinkStyled>
            </MenuItem>
          </Menu>
        </RightMenuStyled>
      </Toolbar>
    </AppBar>

  )
}