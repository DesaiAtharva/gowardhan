'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About Us', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', p: 3, backgroundColor: '#1A1A1A', height: '100%', color: '#FFFFFF' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFFFF' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant="h6" sx={{ mb: 4, letterSpacing: 2, color: '#C9A14A' }}>
        GOWARDHAN
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ textAlign: 'center', mb: 2 }}>
            <Link href={item.path} style={{ width: '100%' }} onClick={handleDrawerToggle}>
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ 
                  fontSize: '1.2rem', 
                  sx: { 
                    color: pathname === item.path ? '#C9A14A' : '#FFFFFF',
                    fontWeight: pathname === item.path ? 700 : 400
                  } 
                }} 
              />
            </Link>
          </ListItem>
        ))}
      </List>
      <Button 
        variant="contained" 
        fullWidth 
        sx={{ mt: 4, backgroundColor: '#C9A14A', '&:hover': { backgroundColor: '#A68239' } }}
      >
        Enquire Now
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.3s ease-in-out',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          color: scrolled ? '#FFFFFF' : (pathname === '/' ? '#FFFFFF' : '#1A1A1A')
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: scrolled ? 70 : 100, transition: 'height 0.3s' }}>
            <Typography
              variant="h5"
              component={Link}
              href="/"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: { xs: '.1rem', md: '.2rem' },
                color: 'inherit',
                textDecoration: 'none',
                fontFamily: 'var(--font-playfair-display)',
                display: 'flex',
                alignItems: 'center',
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ color: '#C9A14A' }}>GOWARDHAN</span>&nbsp;DEVELOPERS
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  href={item.path}
                   sx={{
                    mx: 1,
                    color: 'inherit',
                    display: 'block',
                    fontSize: '0.9rem',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: pathname === item.path ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: '#C9A14A',
                      transition: 'all 0.3s',
                      transform: 'translateX(-50%)'
                    },
                    '&:hover::after': {
                      width: '100%'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                variant="contained" 
                color="primary"
                sx={{ ml: 2, px: 3 }}
              >
                Book Site Visit
              </Button>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', maxWidth: 300 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
