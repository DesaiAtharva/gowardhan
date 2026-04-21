'use client';

import { createTheme } from '@mui/material/styles';
import { Montserrat, Playfair_Display } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#C9A14A', // Luxury Gold
      light: '#D4B26F',
      dark: '#A68239',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1A1A1A', // Sharp Dark Accent
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F9F9F9',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
          borderRadius: '0px', // Premium sharp look
          transition: 'all 0.3s ease-in-out',
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#A68239',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 20px rgba(201, 161, 74, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export default theme;
