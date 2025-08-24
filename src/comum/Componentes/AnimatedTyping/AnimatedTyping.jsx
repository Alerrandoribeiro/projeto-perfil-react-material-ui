import { Box, Typography } from "@mui/material";

function AnimatedTyping() {
  return (
    <Box
      sx={{
        maxWidth: { xs: "95%", sm: "90%", md: 1000 },
        margin: "40px auto",
        padding: { xs: 2, sm: 3 },
        borderRadius: 3,
        backgroundColor: "transparent", // 🔹 fica transparente
        boxShadow: "none", // 🔹 remove a sombra (opcional)
        textAlign: "center",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "none", // 🔹 nada de sombra ao hover
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
            maxWidth: "100%",
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
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
        }}
      >
        Sinta-se à vontade para explorar e conhecer mais sobre meu trabalho como desenvolvedor.
      </Typography>
    </Box>
  );
}

export default AnimatedTyping;
