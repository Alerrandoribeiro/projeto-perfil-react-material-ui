import React from "react";
import { Box, Typography, Avatar, Tooltip, Container } from "@mui/material";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#264DE4" },
  { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
  { name: "Git", icon: <FaGitAlt />, color: "#F1502F" },
];

const TechStackStylish = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 2, sm: 3, md: 5 }, 
        mb: { xs: 4, sm: 5 },
      }}
    >
      <Box
        sx={{
          py: { xs: 5, sm: 7 }, 
          px: { xs: 2, sm: 4 },
          backgroundColor: "rgba(10, 25, 47, 0.4)", // fundo semi-transparente
          borderRadius: 4,
          backdropFilter: "blur(8px)", // desfoca o que está atrás
          boxShadow: "0 12px 40px rgba(0,255,204,0.2)",
          textAlign: "center",
          transition: "all 0.3s ease",
        }}
      >
        {/* Texto descritivo */}
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            color: "#00FFC6",
            fontWeight: 700,
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          Software Development Student | Front-End & Back-End
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 5,
            color: "#fff",
            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
            lineHeight: 1.6,
          }}
        >
          Apaixonado por criar soluções completas, combinando frontend, backend e banco de dados.
          Aqui estão algumas das tecnologias que utilizo no meu dia a dia:
        </Typography>

        {/* Stack de tecnologias */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 3, sm: 4, md: 5 },
            justifyContent: "center",
          }}
        >
          {techStack.map((tech, index) => (
            <Tooltip key={index} title={tech.name} arrow>
              <Avatar
                sx={{
                  width: { xs: 60, sm: 70, md: 80 },
                  height: { xs: 60, sm: 70, md: 80 },
                  bgcolor: tech.color,
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.35)",
                    boxShadow: `0 15px 35px ${tech.color}`,
                    cursor: "pointer",
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                }}
              >
                {tech.icon}
              </Avatar>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default TechStackStylish;
