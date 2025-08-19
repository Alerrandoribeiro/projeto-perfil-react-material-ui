import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import theme from './comum/theme/theme';
import PaginaInicial from './comum/Componentes/Paginas/PaginaInicial/PaginaInicial';
import { AvatarProvider } from './comum/Componentes/utils/AvatarContext/AvatarContext';
import Contato from './comum/Componentes/Paginas/Contato/Contato';
import Skills from './comum/Componentes/Paginas/Skills/Skills';
import Projetos from './comum/Componentes/Paginas/Projetos/Projetos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PaginaInicial />,
  },
  {
    path: '/contato',
    element: <Contato/>,
  },
  {
    path: '/skills',
    element: <Skills/>,
  },
  {
    path: '/projetos',
    element: <Projetos/>,
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
