import React from "react";
import useFetch from "../hooks/useFetch";
import Background from "../assets/img/comic-background.webp";
import { Typography, Box, CircularProgress } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { useAppSelector } from "../app/hooks";
import { Pagination } from "../components/Pagination";

const url = process.env.REACT_APP_API_URL as string;
const key = process.env.REACT_APP_API_KEY as string;

const SearchResults = () => {
  const search = useAppSelector((state) => state.heroes.search);
  const { data, loading, error } = useFetch(url, key, search);

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Navbar />
      {loading ? (
        <Box
          sx={{
            height: "150vh",
            width: "100vw",
            background: `url(${Background})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CircularProgress sx={{ marginTop: "4rem", color: "#fff" }} />
        </Box>
      ) : (
        <Box
          sx={{
            height:
              data?.results?.length > 0
                ? data?.results?.length > 3
                  ? "220vh"
                  : "100vh"
                : "150vh",
            width: "100vw",
            background: `url(${Background})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {data?.results?.length > 0 ? (
            <>
              <Typography
                sx={{
                  marginTop: "2.2rem",
                  color: "#fff",
                  fontFamily: "Bebas Neue",
                  fontSize: { lg: "42px", xs: "32px" },
                }}
              >
                Search Results:
              </Typography>

              {data?.results && (
                <>
                  <Pagination data={data.results} />
                </>
              )}
            </>
          ) : (
            <Typography
              sx={{
                marginTop: "4rem",
                color: "#fff",
                fontFamily: "Bebas Neue",
                fontSize: { lg: "42px", xs: "32px" },
              }}
            >
              No se encontraron resultados
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default SearchResults;
