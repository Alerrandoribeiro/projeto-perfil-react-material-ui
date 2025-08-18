import React, { useContext, useState } from 'react';
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AvatarContext } from '../utils/AvatarContext/AvatarContext';

const backgroundImage = "fotoInicial.png";

const ApresentacaoComFoto = () => {
  const { avatarUrl } = useContext(AvatarContext); // pega o avatar do contexto
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded(prev => !prev);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 6, sm: 8, md: 10 },
        pb: { xs: expanded ? 10 : 4, sm: expanded ? 12 : 5, md: expanded ? 14 : 6 },
        color: '#fff',
        textAlign: 'center',
        px: { xs: 2, sm: 4, md: 6 },
        transition: 'padding-bottom 0.3s ease',
      }}
    >
      {/* Avatar */}
      <Box
        component="img"
        src={avatarUrl}
        alt="Glauberty Chagas"
        sx={{
          width: { xs: 160, sm: 200, md: 240, lg: 260 },
          height: { xs: 160, sm: 200, md: 240, lg: 260 },
          objectFit: 'cover',
          borderRadius: '16px',
          mb: { xs: 3, sm: 4, md: 5 },
          border: '5px solid #fff',
          boxShadow: '0px 8px 30px rgba(0,0,0,0.6)',
          mx: 'auto',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.07)',
            boxShadow: '0px 12px 40px rgba(0,0,0,0.7)',
          },
        }}
      />

      {/* Título */}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: '700',
          letterSpacing: 1.2,
          textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
          fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem', lg: '3.5rem' },
        }}
      >
        Desenvolvedor Full Stack
      </Typography>

      {/* Subtítulo */}
      <Typography
        variant="h6"
        sx={{
          maxWidth: { xs: 300, sm: 500, md: 700 },
          mx: 'auto',
          lineHeight: 1.6,
          textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
          fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' },
          mb: 2,
        }}
      >
        Criando soluções completas com qualidade, unindo Frontend, Backend e banco de dados.
      </Typography>

      {/* Ações */}
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <IconButton aria-label="whatsapp" sx={{ color: '#25D366' }}>
          <WhatsAppIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="gmail" sx={{ color: '#EA4335' }}>
          <EmailIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="share" sx={{ color: '#fff' }}>
          <ShareIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="expand"
          onClick={handleExpandClick}
          sx={{
            color: '#fff',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          <ExpandMoreIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Seção expandida */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ mt: 3, maxWidth: 600, mx: 'auto' }}>
          <Typography sx={{ mb: 2, fontWeight: 'bold' }}>Sobre mim:</Typography>
          <Typography sx={{ mb: 2 }}>
            Sou desenvolvedor full stack apaixonado por tecnologia, criando soluções que unem frontend, backend e banco de dados.
          </Typography>
          <Typography>
            Sempre buscando aprender novas ferramentas e metodologias para entregar sistemas eficientes, escaláveis e bem estruturados.
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ApresentacaoComFoto;
