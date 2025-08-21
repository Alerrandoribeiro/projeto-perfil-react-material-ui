import { Box, Typography } from "@mui/material";

function AnimatedTyping() {
  return (
    <Box
      sx={{
        maxWidth: { xs: "95%", sm: "90%", md: 1000 }, // ocupa quase toda a tela no celular, limita no desktop
        margin: "40px auto",
        padding: { xs: 2, sm: 3 }, // menos padding em telas pequenas
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(0, 255, 204, 0.2)",
        backgroundColor: "#0A192F",
        textAlign: "center",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 12px 30px rgba(0, 255, 204, 0.4)",
        },
      }}
    >
      {/* Imagem responsiva */}
      <Typography component="div" sx={{ mb: 2 }}>
        <img
          src="https://readme-typing-svg.herokuapp.com/?color=00ffcc&size=35&center=true&vcenter=true&width=1000&lines=Seja+bem-vindo+ao+meu+Perfil!;Em+constante+aprendizado+🚀;Confira+meus+projetos+e+colabore!"
          alt="Typing SVG"
          style={{
            width: "100%",
            maxWidth: "100%", // nunca estoura a largura do container
            height: "auto",
            borderRadius: 8,
          }}
        />
      </Typography>

      {/* Texto responsivo */}
      <Typography
        variant="body1"
        color="secondary"
        sx={{
          fontStyle: "italic",
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // menor no celular, maior no desktop
        }}
      >
        Sinta-se à vontade para explorar e conhecer mais sobre meu trabalho como desenvolvedor.
      </Typography>
    </Box>
  );
}

export default AnimatedTyping;
