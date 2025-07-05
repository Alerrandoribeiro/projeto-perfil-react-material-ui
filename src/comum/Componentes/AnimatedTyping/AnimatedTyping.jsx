import { Box, Typography } from '@mui/material';

function AnimatedTyping() {
  return (
    <Box
      sx={{
        maxWidth: 1000,
        margin: '40px auto',
        padding: 3,
        borderRadius: 3,
        boxShadow: '0 8px 24px rgba(0, 255, 204, 0.2)', 
        backgroundColor: '#0A192F', 
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 12px 30px rgba(0, 255, 204, 0.4)',
        },
      }}
    >
      <Typography component="div" sx={{ mb: 2 }}>
        <img
          src="https://readme-typing-svg.herokuapp.com/?color=00ffcc&size=35&center=true&vcenter=true&width=1000&lines=Seja+bem-vindo+ao+meu+Perfil!;Em+constante+aprendizado+🚀;Confira+meus+projetos+e+colabore!"
          alt="Typing SVG"
          style={{ width: '100%', maxWidth: 900, height: 'auto', borderRadius: 8 }}
        />
      </Typography>

      <Typography variant="body1" color="secondary" sx={{ fontStyle: 'italic' }}>
        Sinta-se à vontade para explorar e conhecer mais sobre meu trabalho como desenvolvedor.
      </Typography>
    </Box>
  );
}

export default AnimatedTyping;
