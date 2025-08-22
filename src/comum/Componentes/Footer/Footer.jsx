import React from 'react';
import { Box, Typography, IconButton, Link, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4 },
        backgroundColor: '#0A192F',
        color: '#fff',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">

        {/* Redes sociais */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <IconButton
            component="a"
            href="https://github.com/Alerrandoribeiro"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#fff' }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/glauberty-ribeiro"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#0A66C2' }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#1DA1F2' }}
          >
            <TwitterIcon />
          </IconButton>
        </Box>

        {/* Copyright */}
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} Glauberty Chagas. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
