import React, { useContext, useState } from "react";
import { Box, Typography, IconButton, Collapse, Container } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AvatarContext } from "../utils/AvatarContext/AvatarContext";

const backgroundImage = "fotoInicial.png";

const ApresentacaoComFoto = () => {
  const { avatarUrl } = useContext(AvatarContext);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => setExpanded(prev => !prev);

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 700, md: 900, lg: 1400, xl: 1600 }, // mais largo no desktop
          mx: "auto",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 6, sm: 8, md: 8, lg: 6, xl: 6 }, // menor altura no desktop
          pb: {
            xs: expanded ? 10 : 4,
            sm: expanded ? 12 : 5,
            md: expanded ? 12 : 5,
            lg: expanded ? 10 : 4,
            xl: expanded ? 10 : 4,
          },
          px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 8 },
          color: "#fff",
          textAlign: "center",
          transition: "padding-bottom 0.3s ease",
        }}
      >
        {/* Avatar */}
        <Box
          component="img"
          src={avatarUrl}
          alt="Foto de perfil"
          sx={{
            width: { xs: 140, sm: 180, md: 200, lg: 220, xl: 240 }, // menor no desktop
            height: { xs: 140, sm: 180, md: 200, lg: 220, xl: 240 },
            objectFit: "cover",
            borderRadius: 4,
            mb: { xs: 3, sm: 4, md: 4, lg: 3 },
            border: "5px solid #fff",
            boxShadow: "0px 8px 30px rgba(0,0,0,0.6)",
            mx: "auto",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 12px 40px rgba(0,0,0,0.7)",
            },
          }}
        />

        {/* Título */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            letterSpacing: 1.2,
            textShadow: "3px 3px 6px rgba(0,0,0,0.7)",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem", lg: "3rem", xl: "3.2rem" }, // menor no desktop
          }}
        >
          Desenvolvedor Full Stack
        </Typography>

        {/* Subtítulo */}
        <Typography
          variant="h6"
          sx={{
            maxWidth: { xs: 320, sm: 480, md: 680, lg: 1000, xl: 1200 }, // mais largo no desktop
            mx: "auto",
            lineHeight: 1.5,
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
            fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem", lg: "1.25rem", xl: "1.3rem" },
            mb: { xs: 2, sm: 3 },
          }}
        >
          Criando soluções completas com qualidade, unindo Frontend, Backend e banco de dados.
        </Typography>

        {/* Botões de ação */}
        <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 2 }, justifyContent: "center" }}>
          <IconButton aria-label="whatsapp" sx={{ color: "#25D366" }}>
            <WhatsAppIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="gmail" sx={{ color: "#EA4335" }}>
            <EmailIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="share" sx={{ color: "#fff" }}>
            <ShareIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="expand"
            onClick={handleExpandClick}
            sx={{
              color: "#fff",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <ExpandMoreIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* Seção expandida */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ mt: 3, maxWidth: 700, mx: "auto", px: { xs: 2, sm: 0 } }}>
            <Typography sx={{ mb: 2, fontWeight: "bold", fontSize: { xs: "1rem", md: "1.1rem" } }}>
              Sobre mim:
            </Typography>
            <Typography sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
              Sou desenvolvedor full stack apaixonado por tecnologia, criando soluções que unem
              frontend, backend e banco de dados.
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
              Sempre buscando aprender novas ferramentas e metodologias para entregar sistemas
              eficientes, escaláveis e bem estruturados.
            </Typography>
          </Box>
        </Collapse>
      </Box>
    </Container>
  );
};

export default ApresentacaoComFoto;
