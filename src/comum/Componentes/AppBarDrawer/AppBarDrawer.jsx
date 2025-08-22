import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
} from '@mui/material';

import { Link, Outlet } from "react-router-dom"; 

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';

// Componentes customizados
import AvatarPerfil from '../AvatarPerfil/AvatarPerfil';
import ApresentacaoComFoto from '../ApresentacaoComFoto/ApresentacaoComFoto';

const drawerWidth = 280;

// ✅ Estilo da área principal, que "abre/fecha" junto com o Drawer
const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(1),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? 0 : `-${drawerWidth}px`,
}));

// ✅ AppBar customizado para se mover quando o Drawer abre
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// ✅ Cabeçalho do Drawer
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  justifyContent: 'space-between',
}));

// ✅ Box do perfil dentro do Drawer
const ProfileBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3, 2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '0 0 24px 24px',
  boxShadow: theme.shadows[4],
  marginBottom: theme.spacing(2),
}));

// ✅ Itens de menu com rotas
const menuItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Projetos', icon: <CodeIcon />, path: '/projetos' },
  { text: 'Skills', icon: <BuildIcon />, path: '/skills' },
  { text: 'Contato', icon: <ContactMailIcon />, path: '/contato' },
];

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false); // Estado para controlar se o Drawer está aberto

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Reseta os estilos padrões do navegador */}
      <CssBaseline />

      {/* Barra superior */}
      <AppBar color="primary" position="fixed" open={open}>
        <Toolbar>
          {/* Botão para abrir o Drawer */}
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          {/* Nome no AppBar */}
          <Typography variant="h6" noWrap component="div">
            Glauberty Chagas
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer lateral */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* Cabeçalho do Drawer com perfil e botão fechar */}
        <DrawerHeader>
          <ProfileBox>
            <AvatarPerfil />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Glauberty Chagas
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Desenvolvedor Full Stack
            </Typography>
          </ProfileBox>
          {/* Botão fechar */}
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        {/* Lista de menus que levam para as rotas */}
        <List>
          {menuItems.map(({ text, icon, path }) => (
            <ListItem key={text} disablePadding>
              {/* ✅ Agora cada botão é um Link do React Router */}
              <ListItemButton component={Link} to={path} onClick={() => setOpen(false)}>
                <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ fontWeight: 'medium', fontSize: '1.1rem' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Conteúdo principal */}
      <Main open={open}>
        <DrawerHeader />
        {/* ✅ Aqui as páginas vão ser renderizadas dinamicamente */}
        <Outlet />  
      </Main>
    </Box>
  );
}
