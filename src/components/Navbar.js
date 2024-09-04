import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CurriculumModal from '../pages/Curriculum';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openModal, setOpenModal] = useState(false); 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenModal = () => {
    setOpenModal(true); // Abrimos el modal
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Cerramos el modal
  };

  return (
    <><AppBar position="static">
      <Container maxWidth="xl" style={{height: 65}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link} to="/"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: 'primary.main', textDecoration: 'none' }}
          >
            Portafolio
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
                  Portafolio
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/about">
                  Sobre mí
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/projects">
                  Proyectos
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/career">
                  Carrera
                </MenuItem>
                <MenuItem onClick={handleOpenModal}> {/* Abrimos el modal desde aquí */}
                  Curriculum
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <Button
                component={Link} to="/about"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'primary', display: 'block' }}
              >
                Sobre mí
              </Button>
              <Button
                component={Link} to="/projects"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'primary', display: 'block' }}
              >
                Proyectos
              </Button>
              <Button
                component={Link} to="/career"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'primary', display: 'block' }}
              >
                Carrera
              </Button>
              <Button
                onClick={handleOpenModal} // Aquí abrimos el modal
                sx={{ my: 2, color: 'primary', display: 'block' }}
              >
                Curriculum
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar><CurriculumModal open={openModal} handleClose={handleCloseModal} /></>
  );
};

export default Navbar;
