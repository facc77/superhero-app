import React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import {
  setAddHero,
  setRemoveHero,
  setSelectedHero,
} from '../../app/reducers/HeroReducer';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { PowerBar } from '../PowerBar';
import addHeroCheck from '../../helpers/addHeroCheck';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Hero } from '../../types/Hero';
import useWindowSize from '../../hooks/useWindowSize';
import StanImage from '../../assets/img/gameCardImg.jpg';

interface CardProps {
  hero: Hero;
  team: Boolean;
}

const HeroCard: React.FC<CardProps> = ({ hero, team }) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const teamList = useAppSelector((state) => state.heroes.heroes);

  const addHero = () => {
    const toastMessage =
      hero.biography.alignment === 'good'
        ? 'Héroe agregado!'
        : 'Villano agregado!';

    if (addHeroCheck(teamList, hero)) {
      dispatch(setAddHero(hero));
      toast.success(toastMessage, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
      });
      navigate('/teamSection');
    }
  };

  const removeHero = () => {
    const toastMessage =
      hero.biography.alignment === 'good'
        ? 'Héroe eliminado!'
        : 'Villano eliminado!';
    dispatch(setRemoveHero(hero.id));
    toast.error(toastMessage, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
    });
  };

  const selectHero = () => {
    dispatch(setSelectedHero(hero));
    localStorage.setItem('selectedHero', JSON.stringify(hero));
    navigate(`/DetailSection/${hero.id}`);
  };

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

  const InnerCard = styled(Box)(() => ({
    position: 'relative',
    width: '100%',
    height: ' 100%',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
  }));

  const nameFontSize = () => {
    if (hero.name.length >= 16) {
      return { size: '48px', leftPosition: '-19px' };
    } else if (hero.name.length > 11) {
      return { size: '55px', leftPosition: '-22.4px' };
    }
    return { size: '70px', leftPosition: '-28px' };
  };

  const imageOnErrorHandler = (event: any) => {
    event.currentTarget.src = StanImage;
  };

  return (
    <>
      {width > 768 ? (
        <Box
          sx={{
            position: 'relative',
            height: 350,
            width: 300,
            backgroundColor: 'transparent',
            margin: '1.9rem',

            borderRadius: '7px',
            perspective: '1000px',
            '&:hover': {
              [`${InnerCard}`]: {
                transform: 'rotateY(180deg)',
              },
            },
          }}
        >
          <InnerCard>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                '-webkit-backfaceVisibility': 'hidden',
                backfaceVisibility: 'hidden',
              }}
            >
              <Box
                component='img'
                src={hero.image?.url}
                alt='hero image'
                sx={{
                  height: '350px',
                  width: '300px',
                  borderRadius: '7px',
                  border: `3px solid ${
                    hero.biography.alignment === 'good' ? '#00ab41' : 'red'
                  }`,
                }}
                onError={imageOnErrorHandler}
              />
              <Typography
                sx={{
                  color: '#fff',
                  fontSize: nameFontSize().size,
                  marginTop: '1rem',
                  writingMode: ' vertical-rl',
                  position: 'absolute',
                  left: nameFontSize().leftPosition,
                  top: '5px',
                  '-webkit-text-stroke-width': '0.5px',
                  '-webkit-text-stroke-color': '#000',
                }}
              >
                {hero.name}
              </Typography>
              <Typography
                sx={{
                  color: '#fff',
                  fontSize: '20px',
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
                #{hero.id}
              </Typography>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                '-webkit-backfaceVisibility': 'hidden',
                backfaceVisibility: 'hidden',
                backgroundColor: '#000',
                borderRadius: '7px',
                transform: 'rotateY(180deg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: ` 3px solid ${
                  hero.biography.alignment === 'good' ? '#00ab41' : 'red'
                }`,
              }}
            >
              <Box sx={{ width: '90%' }}>
                <PowerBar {...hero.powerstats} />
              </Box>
              <Box sx={{ width: '70%', marginTop: '1rem' }}>
                {team ? (
                  <CardButton onClick={() => removeHero()}>
                    Sacar del equipo
                  </CardButton>
                ) : (
                  <CardButton onClick={addHero}>Agregar al equipo</CardButton>
                )}
                <CardButton onClick={selectHero}>Detalle</CardButton>
              </Box>
            </Box>
          </InnerCard>
        </Box>
      ) : (
        <Box
          sx={{
            position: 'relative',
            height: { xs: 175, md: 350 },
            width: { xs: 150, md: 300 },
            backgroundColor: 'transparent',
            margin: { xs: '0.60rem', s: '1rem', md: '2rem' },
            borderRadius: '7px',
          }}
        >
          <InnerCard>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                '-webkit-backfaceVisibility': 'hidden',
                backfaceVisibility: 'hidden',
                borderRadius: '7px',
                border: `2px solid ${
                  hero.biography.alignment === 'good' ? '#00ab41' : 'red'
                }`,
              }}
            >
              <Box
                component='img'
                src={hero.image?.url}
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
                  fontSize: { xs: '22px', md: '70px' },
                  left: { xs: '-11px', md: '-31px' },
                  top: { xs: '-8px', md: '10px' },
                  marginTop: '1rem',
                  writingMode: ' vertical-rl',
                  position: 'absolute',
                  '-webkit-text-stroke-width': '0.5px',
                  '-webkit-text-stroke-color': '#000',
                }}
              >
                {hero.name}
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
                #{hero.id}
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
                {team ? (
                  <CardButton
                    sx={{
                      padding: { xs: '2px 4px !important', md: '6px 8px' },
                      fontSize: { xs: '0.8rem', md: '0.875rem' },
                      lineHeight: { xs: '0.3rem !important', md: '1.75' },
                    }}
                    onClick={() => removeHero()}
                  >
                    Sacar
                  </CardButton>
                ) : (
                  <CardButton
                    sx={{
                      padding: { xs: '2px 4px !important', md: '6px 8px' },
                      fontSize: { xs: '0.8rem', md: '0.875rem' },
                      lineHeight: { xs: '1rem ', md: '1.75' },
                    }}
                    onClick={addHero}
                  >
                    Agregar
                  </CardButton>
                )}
                <CardButton
                  sx={{
                    padding: { xs: '2px 4px !important', md: '6px 8px' },
                    fontSize: { xs: '0.8rem', md: '0.875rem' },
                    lineHeight: { xs: '1rem !important', md: '1.75' },
                  }}
                  onClick={selectHero}
                >
                  Detalle
                </CardButton>
              </Box>
            </Box>
          </InnerCard>
        </Box>
      )}
    </>
  );
};

export default HeroCard;
