import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Navbar } from "../components/Navbar";
import Background from "../assets/img/comic-background.webp";
import { useAppSelector } from "../app/hooks";
import { HeroCard } from "../components/HeroCard";
import { TeamStats } from "../components/TeamStats";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const TeamSection = () => {
  const team = useAppSelector((state) => state.heroes.heroes);
  localStorage.setItem("team", JSON.stringify(team));

  const textStyle = {
    color: "#fff",
    fontFamily: "Bebas Neue",
    fontSize: { lg: "42px", xs: "32px" },
    textAlign: "center",
    marginTop: "4rem",
    width: "50%",
    backgroundColor: "rgb(0,0,0,0.4)",
    borderRadius: "4px",
  };

  return (
    <>
      <Box
        sx={{
          height: team.length > 0 ? "initial" : "100vh",
          width: "100%",
          background: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Container sx={{ padding: { xs: 0 } }}>
          {team.length > 0 ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "2rem",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Bebas Neue",
                  fontSize: { lg: "42px", xs: "32px" },
                }}
              >
                Grupo actual
              </Typography>
              <TeamStats />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  paddingBottom: { xs: "2rem", md: "initial" },
                }}
              >
                {team.map((hero) => {
                  return <HeroCard key={hero.id} hero={hero} team={true} />;
                })}
              </Box>
              <Link to="/searchResults" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    marginBottom: "2rem",
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    fontFamily: "Bebas Neue",
                    "&:hover": {
                      backgroundColor: "#1976d2",
                      color: "#fff",
                    },
                  }}
                >
                  Regresar a la búsqueda
                </Button>
              </Link>
            </Box>
          ) : (
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={textStyle}>
                Crea un equipo de hasta 6 personajes <br /> 3 heroes y 3
                villanos!
              </Typography>
              <Typography sx={textStyle}>
                Utiliza el buscador para encontrar a los mejores!
              </Typography>
            </Container>
          )}
        </Container>
      </Box>
    </>
  );
};

export default TeamSection;
