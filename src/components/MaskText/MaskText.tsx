import { FC, useRef, useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { BackgroundVideo } from "../BackgroundVideo";
import { Link } from "react-router-dom";
import TextEffect from "../../assets/img/svgMaskText.svg";

const MaskText: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);
  const buttonElement = useRef<HTMLDivElement>(null);
  const [endReached, setEndReached] = useState(false);

  const initialMaskSize = 0.4;

  const targetMaskSize = 52;

  useEffect(() => {
    requestAnimationFrame(animate);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();

    stickyMask.current!.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";

    requestAnimationFrame(animate);
  };

  const handleScroll = () => {
    const scrollProgress =
      stickyMask.current!.offsetTop /
      (container.current!.getBoundingClientRect().height - window.innerHeight);

    if (scrollProgress >= 0.9) {
      buttonElement.current!.style.opacity = "1";
      setEndReached(true);
    } else {
      buttonElement.current!.style.opacity = "0";
      setEndReached(false);
    }
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current!.offsetTop /
      (container.current!.getBoundingClientRect().height - window.innerHeight);

    return scrollProgress;
  };
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        scrollBehavior: "smooth",
      }}
    >
      <Box
        ref={container}
        sx={{
          position: "relative",
          height: { xs: "300vh", md: "180vh" },
        }}
      >
        <Box
          ref={stickyMask}
          sx={{
            display: "flex",
            overflow: "hidden",
            position: "sticky",
            top: 0,
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            maskImage: `url(${TextEffect})`,
            maskPosition: "53.1% center",
            maskRepeat: "no-repeat",
            maskSize: "80%",
          }}
        >
          <BackgroundVideo />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0,
              transition: "all 1s ease-out",
            }}
            ref={buttonElement}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {endReached && (
                <>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: "Bebas Neue",
                      fontSize: { lg: "42px", xs: "32px" },
                      textAlign: "center",
                      cursor: "default",
                    }}
                  >
                    Crea el mejor equipo de héroes y villanos
                  </Typography>
                  <Link to="/teamSection" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        fontFamily: "Bebas Neue",
                        border: "2px solid #3DB8A5",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        backdropFilter: "blur(35px)",
                        borderRadius: "6px",
                        color: "#3DB8A5",
                        fontSize: "16px",
                        cursor: "default",
                        transition: "all 1s ease-out",
                      }}
                    >
                      Elije entre los mejores ahora mismo
                    </Button>
                  </Link>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MaskText;
