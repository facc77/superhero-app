import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/heroLogo.png';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  const handleOpenNavMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const NavButton = styled(Button)(() => ({
    my: 2,
    color: 'white',
    display: 'block',
    fontSize: '20px',
    fontFamily: 'Bebas Neue',
  }));

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            component='img'
            src={Logo}
            alt='logo'
            sx={{ height: '40px', width: '40px' }}
          />
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Bebas Neue',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SUPERHERO APP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link to='teamSection'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>Chequear Equipo</Typography>
                </MenuItem>
              </Link>
              <Link to='/'>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>Inicio</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row-reverse',
            }}
          >
            <Link to='/'>
              <NavButton onClick={handleCloseNavMenu}>Inicio</NavButton>
            </Link>
            <Link to='/teamSection'>
              <NavButton onClick={handleCloseNavMenu} sx={{ outline: 'none' }}>
                Chequear Equipo
              </NavButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
