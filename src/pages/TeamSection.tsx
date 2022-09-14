import React from 'react';
import { Typography, Box } from '@mui/material';
import { Navbar } from '../components/Navbar';
import Background from '../assets/comic-background.jpg';
import { SearchForm } from '../components/SeachForm';
import { useAppSelector } from '../app/hooks';
import { HeroCard } from '../components/HeroCard';

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

const TeamSection = () => {
  const team = useAppSelector((state) => state.heroes.heroes);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Navbar />
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          background: `url(${Background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            marginTop: '3rem',
            backgroundColor: '#fff',
            height: '3.5rem',
            borderRadius: '5px',
            padding: '1rem',
            width: '20%',
          }}
        >
          {/*  <Typography>Team Section</Typography> */}
          <SearchForm />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {team &&
            team.map((hero) => {
              return <HeroCard key={hero.id} hero={hero} team={true} />;
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamSection;
