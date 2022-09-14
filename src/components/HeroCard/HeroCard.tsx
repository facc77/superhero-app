import React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { setAddHero, setRemoveHero } from '../../app/reducers/HeroReducer';
import { useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
/* import styled from '@emotion/styled';
 */ import styled from '@emotion/styled/macro';
import { PowerBar } from '../PowerBar';

interface Hero {
  appearance: {
    'eye-color': string;
    'hair-color': string;
    gender: string;
    height: [string, string];
    weight: [string, string];
    race: string;
  };
  biography: {
    aliases: string[];
    aligment: string;
    'alter-egos': string;
    'first-appearance': string;
    'full-name': string;
    'place-of-birth': string;
    publisher: string;
  };
  connections: {
    'group-affiliation': string;
    relatives: string;
  };
  id: string;
  name: string;
  image?: { url: string } | null;
  powerstats: {
    combat: string;
    durability: string;
    intelligence: string;
    power: string;
    speed: string;
    strength: string;
  };
  work: {
    occupation: string;
    base: string;
  };
}

interface CardProps {
  hero: Hero;
  team: Boolean;
}

const HeroCard: React.FC<CardProps> = ({ hero, team }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const addHero = () => {
    dispatch(setAddHero(hero));
    navigate('/teamSection');
  };

  const removeHero = () => {
    dispatch(setRemoveHero(hero.id));
  };

  const CardButton = styled(Button)(() => ({
    fontFamily: 'Bebas Neue',
    border: '1px solid #fff',
    marginBottom: '0.75rem',
    marginRight: '0.3rem',
    marginLeft: '0.3rem',
    size: 'large',
    color: 'primary',
  }));

  const InnerCard = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: ' 100%',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
  }));

  return (
    <Box
      sx={{
        position: 'relative',
        height: 350,
        width: 300,
        backgroundColor: 'transparent',
        margin: '2rem',
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
            sx={{ height: '350px', width: '300px', borderRadius: '7px' }}
          />
          <Typography
            sx={{
              color: '#fff',
              fontSize: '70px',
              marginTop: '1rem',
              writingMode: ' vertical-rl',
              position: 'absolute',
              left: '-31px',
              top: '10px',
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
            /*  -webkit-backfaceVisibility: "hidden",  */
            backfaceVisibility: 'hidden',
            backgroundColor: '#000',
            borderRadius: '7px',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
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
            <CardButton>Detalle</CardButton>
          </Box>
        </Box>
      </InnerCard>
    </Box>
  );
};

export default HeroCard;
