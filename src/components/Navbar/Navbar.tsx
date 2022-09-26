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
import Logo from '../../assets/img/heroLogo.png';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import { SearchForm } from '../SeachForm';

const ResponsiveAppBar: React.FC = () => {
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
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            component='img'
            src={Logo}
            alt='logo'
            sx={{
              height: '40px',
              width: '40px',
              margin: { xs: '0.5rem', md: '0' },
            }}
          />
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

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              flexDirection: { xs: 'row-reverse' },
              alignItems: 'center',
              marginBottom: { xs: '0.6rem', md: '0' },
            }}
          >
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
              <Link to='/minigame' style={{ textDecoration: 'none' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>Minijuego</Typography>
                </MenuItem>
              </Link>
              <Link to='/teamSection' style={{ textDecoration: 'none' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>Chequear Equipo</Typography>
                </MenuItem>
              </Link>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>Inicio</Typography>
                </MenuItem>
              </Link>
            </Menu>
            <SearchForm />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row-reverse',
            }}
          >
            <Link to='/' style={{ textDecoration: 'none' }}>
              <NavButton onClick={handleCloseNavMenu}>Inicio</NavButton>
            </Link>
            <Link to='/teamSection' style={{ textDecoration: 'none' }}>
              <NavButton onClick={handleCloseNavMenu} sx={{ outline: 'none' }}>
                Chequear Equipo
              </NavButton>
            </Link>
            <Link to='/minigame' style={{ textDecoration: 'none' }}>
              <NavButton onClick={handleCloseNavMenu} sx={{ outline: 'none' }}>
                Minigame
              </NavButton>
            </Link>
            <SearchForm />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
