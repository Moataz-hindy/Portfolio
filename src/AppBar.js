import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TerminalIcon from '@mui/icons-material/Terminal';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const pages = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(248, 249, 250, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        color: '#1f2937',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: '70px' }}>
          {/* --- DESKTOP LOGO SECTION --- */}
          <TerminalIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1.5, color: '#047857', fontSize: '1.8rem' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#hero"
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.12rem',
              textDecoration: 'none',
              background: 'linear-gradient(to right, #047857, #10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.25rem',
            }}
          >
            MOATAZ.AI
          </Typography>

          {/* --- MOBILE MENU (HAMBURGER) --- */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              aria-label="open navigation menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  component="a"
                  href={page.href}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ textAlign: 'center', color: '#1f2937', fontWeight: 600 }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem
                component="a"
                href="https://github.com/Moataz-hindy"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCloseNavMenu}
              >
                <Typography sx={{ textAlign: 'center', color: '#047857', fontWeight: 600 }}>
                  GitHub Profile
                </Typography>
              </MenuItem>
              <MenuItem
                component="a"
                href="https://www.linkedin.com/in/moatazashrafmohamed/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCloseNavMenu}
              >
                <Typography sx={{ textAlign: 'center', color: '#047857', fontWeight: 600 }}>
                  LinkedIn Profile
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* --- MOBILE LOGO SECTION --- */}
          <TerminalIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#047857' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#hero"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.1rem',
              textDecoration: 'none',
              background: 'linear-gradient(to right, #047857, #10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.1rem',
            }}
          >
            MOATAZ.AI
          </Typography>

          {/* --- DESKTOP NAV LINKS --- */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', gap: 1, mr: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component="a"
                href={page.href}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  px: 2,
                  color: '#4b5563',
                  display: 'block',
                  textTransform: 'none',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  borderRadius: '20px',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    color: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* --- SOCIAL ICONS & AVATAR BADGE --- */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title="GitHub: @Moataz-hindy">
              <IconButton
                component="a"
                href="https://github.com/Moataz-hindy"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: '#4b5563',
                  '&:hover': { color: '#047857', backgroundColor: 'rgba(4, 120, 87, 0.08)' },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="LinkedIn Profile">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/moatazashrafmohamed/"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: '#4b5563',
                  '&:hover': { color: '#047857', backgroundColor: 'rgba(4, 120, 87, 0.08)' },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Contact Moataz">
              <IconButton component="a" href="#contact" sx={{ p: 0.5 }}>
                <Avatar
                  sx={{
                    bgcolor: '#064e3b',
                    color: '#10b981',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    width: 38,
                    height: 38,
                    border: '2px solid #10b981',
                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.08)',
                      boxShadow: '0 0 16px rgba(16, 185, 129, 0.6)',
                    },
                  }}
                >
                  MH
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;