import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Logo from "../../assets/img/heroLogo.png";
import Scroll from "../../assets/img/scrollDown.png";

const HomeSlice: FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={Logo}
        alt="logo"
        sx={{
          height: "60px",
          width: "60px",
          margin: { xs: "0.5rem", md: "0" },
        }}
      />
      <Typography
        sx={{
          color: "#000",
          fontFamily: "Bebas Neue",
          fontSize: { lg: "50px", xs: "32px" },
          textAlign: "center",
          cursor: "default",
        }}
      >
        SuperHero App
      </Typography>
      <motion.img
        animate={{
          opacity: 0,
          y: 10,
          transition: {
            duration: 2,
            repeat: Infinity,
          },
        }}
        src={Scroll}
        alt="scroll image"
      />
    </Box>
  );
};

export default HomeSlice;
