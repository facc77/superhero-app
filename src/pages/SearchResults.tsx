import React from 'react';
import useFetch from '../hooks/useFetch';
import { Typography, Box } from '@mui/material';
import { Navbar } from '../components/Navbar';
import Background from '../assets/comic-background.jpg';
import { HeroCard } from '../components/HeroCard';

const url = process.env.REACT_APP_API_URL as string;
const key = process.env.REACT_APP_API_KEY as string;

/* interface Hero {
  id: string;
  name: string;
  gender: string;
  race: string;
  image: { url: string };
  height: [string, string];
  weight: [string, string];
  'eye-color': string;
  'hair-color': string;
} */

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

const SearchResults = () => {
  const search = window.localStorage.getItem('search');
  const { data, error } = useFetch(url, key, search);

  console.log(data, error);
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
        }}
      >
        <Box
          sx={{
            marginTop: '3rem',
            backgroundColor: '#fff',
            height: '5rem',
            borderRadius: '5px',
          }}
        >
          <Typography>Search Results</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {data?.results &&
            data.results.map((hero: Hero) => {
              return <HeroCard key={hero.id} hero={hero} team={false} />;
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchResults;
