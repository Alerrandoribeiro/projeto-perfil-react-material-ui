import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import theme from './comum/theme/theme';
import PaginaInicial from './comum/Componentes/Paginas/PaginaInicial/PaginaInicial';
import { AvatarProvider } from './comum/Componentes/utils/AvatarContext/AvatarContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PaginaInicial />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AvatarProvider>
        <ToastContainer position="top-right" autoClose={5000} />
        <RouterProvider router={router} />
      </AvatarProvider>
    </ThemeProvider>
  );
}

export default App;
