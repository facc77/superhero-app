import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Background from '../assets/img/comic-background.jpg';
import {
  Typography,
  Box,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Container } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { PowerBar } from '../components/PowerBar';
import styled from '@emotion/styled/macro';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import addHeroCheck from '../helpers/addHeroCheck';
import { setAddHero, setRemoveHero } from '../app/reducers/HeroReducer';

const DetailSection = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [onTeam, setOnTeam] = useState(false);
  const selectedHero = useAppSelector((state) => state.heroes.heroSelected);
  const team = useAppSelector((state) => state.heroes.heroes);

  const team2 = JSON.parse(localStorage.getItem('team') || '[]');

  let { heroId } = useParams();

  useEffect(() => {
    for (let i = 0; i < team2.length; i++) {
      if (Object.values(team2[i]).includes(heroId)) {
        setOnTeam(true);
      }
    }
  }, [team2, heroId]);

  const CardButton = styled(Button)(() => ({
    fontFamily: 'Bebas Neue',
    border: '1px solid #fff',
    marginBottom: '0.75rem',
    marginRight: '0.3rem',
    marginLeft: '0.3rem',
    size: 'large',
    color: 'primary',
    backgroundColor: '#000',
    '&:hover': {
      backgroundColor: '#000',
    },
  }));
  const addHero = () => {
    if (selectedHero === null) {
      return;
    }
    const toastMessage =
      selectedHero.biography.alignment === 'good'
        ? 'Héroe agregado!'
        : 'Villano agregado!';
    if (addHeroCheck(team, selectedHero)) {
      dispatch(setAddHero(selectedHero));
      toast.success(toastMessage, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
      });
      navigate('/teamSection');
    }
  };

  const removeHero = () => {
    if (selectedHero === null) {
      return;
    }
    const toastMessage =
      selectedHero.biography.alignment === 'good'
        ? 'Héroe eliminado!'
        : 'Villano eliminado!';
    dispatch(setRemoveHero(selectedHero.id));
    toast.error(toastMessage, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
    });
    navigate('/teamSection');
  };
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        background: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingBottom: { xs: '2rem', md: 'initial' },
      }}
    >
      <Navbar />
      <Container
        sx={{
          marginTop: '3rem',
          paddingX: { xs: 0, md: 'initial' },
        }}
      >
        {selectedHero ? (
          <Grid
            container
            spacing={2}
            columns={{ xs: 6, md: 12 }}
            sx={{
              height: '80vh',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              paddingBottom: { xs: '1.2rem', md: 'initial' },
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                height: { xs: '25vh', md: 'initial' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  marginTop: { xs: '3rem', md: 'initial' },
                }}
              >
                <Box
                  component='img'
                  src={selectedHero.image?.url}
                  alt='hero image'
                  sx={{
                    height: { xs: 175, md: 350 },
                    width: { xs: 150, md: 300 },
                    borderRadius: '7px',
                  }}
                />
                <Typography
                  sx={{
                    color: '#fff',
                    fontSize: { xs: '27px', md: '70px' },
                    left: { xs: '-11px', md: '-31px' },
                    top: { xs: '-8px', md: '10px' },
                    marginTop: '1rem',
                    writingMode: ' vertical-rl',
                    position: 'absolute',
                    '-webkit-text-stroke-width': '0.5px',
                    '-webkit-text-stroke-color': '#000',
                  }}
                >
                  {selectedHero.name}
                </Typography>
                <Typography
                  sx={{
                    color: '#fff',
                    fontSize: { xs: '13px', md: '20px' },
                    marginTop: '1rem',
                    transform: 'rotate(45deg)',
                    position: 'absolute',
                    right: '5px',
                    top: '-10px',
                    backgroundColor: '#000',
                    borderRadius: '50%',
                    padding: '5px',
                  }}
                >
                  #{selectedHero.id}
                </Typography>
                <Box
                  sx={{
                    position: 'relative',
                    bottom: { xs: '2.3rem', md: '5rem' },
                    width: ' 100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {onTeam ? (
                    <CardButton
                      sx={{
                        padding: { xs: '8px 10px', md: '10px 16px' },
                        fontSize: { xs: '0.8rem', md: '0.875rem' },
                        lineHeight: { xs: '0.4rem', md: '1.5' },
                      }}
                      onClick={() => removeHero()}
                    >
                      Sacar del equipo
                    </CardButton>
                  ) : (
                    <CardButton
                      sx={{
                        padding: { xs: '8px 10px', md: '10px 16px' },
                        fontSize: { xs: '0.8rem', md: '0.875rem' },
                        lineHeight: { xs: '0.4rem', md: '1.5' },
                      }}
                      onClick={addHero}
                    >
                      Agregar al equipo
                    </CardButton>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  height: {
                    xs: '40vh',
                    md: '80vh',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  bottom: { xs: '3rem', md: 'initial' },
                }}
              >
                <Typography
                  sx={{
                    color: '#fff',
                    fontFamily: 'Bebas Neue',
                    fontSize: { lg: '32px', xs: '24px' },
                  }}
                >
                  {selectedHero.name}
                </Typography>
                <Typography
                  sx={{
                    color: '#fff',
                    fontFamily: 'Bebas Neue',
                    fontSize: { lg: '16px', xs: '14px' },
                    textAlign: 'center',
                  }}
                >
                  {`Aliases: ${selectedHero.biography['aliases']
                    .join(',')
                    .replace(/([^,]*,){3}/, '')}`}
                </Typography>
                <Box
                  sx={{
                    height: '30%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <List
                    sx={{
                      display: 'flex',
                      width: '88%',
                      flexWrap: 'wrap',
                    }}
                  >
                    <ListItem sx={{ padding: 0, width: '50% !important' }}>
                      <ListItemIcon sx={{ minWidth: '30px' }}>
                        <StarBorderIcon sx={{ color: '#fff' }} />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          color: '#fff',
                          fontFamily: 'Bebas Neue',
                        }}
                        primary={`Peso : ${selectedHero.appearance.weight[1]}`}
                      />
                    </ListItem>
                    <ListItem sx={{ padding: 0, width: '50% !important' }}>
                      <ListItemIcon sx={{ minWidth: '30px' }}>
                        <StarBorderIcon sx={{ color: '#fff' }} />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          color: '#fff',
                          fontFamily: 'Bebas Neue',
                        }}
                        primary={`Raza : ${selectedHero.appearance.race}`}
                      />
                    </ListItem>
                    <ListItem sx={{ padding: 0, width: '50% !important' }}>
                      <ListItemIcon sx={{ minWidth: '30px' }}>
                        <StarBorderIcon sx={{ color: '#fff' }} />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          color: '#fff',
                          fontFamily: 'Bebas Neue',
                        }}
                        primary={`Altura : ${selectedHero.appearance.height[1]}`}
                      />
                    </ListItem>
                    <ListItem sx={{ padding: 0, width: '50% !important' }}>
                      <ListItemIcon sx={{ minWidth: '30px' }}>
                        <StarBorderIcon sx={{ color: '#fff' }} />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          color: '#fff',
                          fontFamily: 'Bebas Neue',
                        }}
                        primary={`Color de ojos : ${selectedHero.appearance['eye-color']}`}
                      />
                    </ListItem>
                    <ListItem sx={{ padding: 0, width: '50% !important' }}>
                      <ListItemIcon sx={{ minWidth: '30px' }}>
                        <StarBorderIcon sx={{ color: '#fff' }} />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          color: '#fff',
                          fontFamily: 'Bebas Neue',
                        }}
                        primary={`Color de cabello : ${selectedHero.appearance['hair-color']}`}
                      />
                    </ListItem>
                    <ListItem sx={{ padding: 0, width: '50% !important' }}>
                      <ListItemIcon sx={{ minWidth: '30px' }}>
                        <StarBorderIcon sx={{ color: '#fff' }} />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          color: '#fff',
                          fontFamily: 'Bebas Neue',
                        }}
                        primary={`Lugar de trabajo : ${selectedHero.work.base.replace(
                          /([^,]*,){3}/,
                          '',
                        )}`}
                      />
                    </ListItem>
                  </List>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    top: { xs: '3.5rem', md: 'initial' },
                  }}
                >
                  <Box
                    sx={{
                      width: '80%',
                    }}
                  >
                    <PowerBar {...selectedHero.powerstats} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Typography
              sx={{
                color: '#fff',
                fontFamily: 'Bebas Neue',
                fontSize: { lg: '42px', xs: '32px' },
              }}
            >
              Selecciona un héroe!
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default DetailSection;
