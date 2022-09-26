import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <BackgroundVideo />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontFamily: 'Bebas Neue',
              fontSize: { lg: '42px', xs: '32px' },
              textAlign: 'center',
            }}
          >
            Crea el mejor equipo de héroes y villanos
          </Typography>
          <Link to='teamSection' style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                fontFamily: 'Bebas Neue',
                border: '2px solid #3DB8A5',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(35px)',
                borderRadius: '6px',
                color: '#3DB8A5',
                fontSize: '16px',
              }}
            >
              Elije entre los mejores ahora mismo
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Home;
