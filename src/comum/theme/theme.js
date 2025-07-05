// src/theme.js
import { createTheme } from '@mui/material/styles';

// Cores inspiradas em tons modernos para devs
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0A192F', // azul escuro elegante
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#64FFDA', // verde neon sutil
    },
    background: {
      default: '#F4F7FA', // fundo claro e limpo
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0A192F',
      secondary: '#6c757d',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          padding: '10px 24px',
          transition: 'all 0.3s ease-in-out',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 20px rgba(100, 255, 218, 0.3)',
          },
        },
        containedPrimary: {
          backgroundColor: '#0A192F',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#122640',
          },
        },
        outlinedPrimary: {
          borderColor: '#0A192F',
          color: '#0A192F',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export default theme;
