import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import PaginaInicial from "./comum/Componentes/Paginas/PaginaInicial/PaginaInicial";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './comum/theme/theme';

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
      <ToastContainer position="top-right" autoClose={5000} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
