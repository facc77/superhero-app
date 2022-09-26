import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { PowerBar } from '../PowerBar';
import { Box, Typography } from '@mui/material';

interface PowerBarProps {
  intelligence: string;
  durability: string;
  combat: string;
  power: string;
  speed: string;
  strength: string;
}

const TeamStats = () => {
  const equipo = useAppSelector((state) => state.heroes.heroes);

  const equipoValue: PowerBarProps[] = equipo.map(function (h) {
    return h.powerstats;
  });

  const averageWeightCalc = equipo.map(function (h) {
    return h.appearance.weight[1].replace(/\D/g, '');
  });

  const averageWeight = Math.round(
    averageWeightCalc.reduce((a, b) => +a + +b, 0) / averageWeightCalc.length,
  );

  const averageHeightCalc = equipo.map(function (h) {
    return h.appearance.height[1].replace(/\D/g, '');
  });
  const averageHeight = Math.round(
    averageHeightCalc.reduce((a, b) => +a + +b, 0) / averageHeightCalc.length,
  );

  const powerStats = equipoValue.reduce(
    (powerStats: { [key: string]: any }, stat) => {
      for (const [statName, statSum] of Object.entries(stat)) {
        if (!powerStats[statName]) {
          powerStats[statName] = 0;
        }
        powerStats[statName] += +statSum;
      }
      return powerStats;
    },
    {},
  );

  const maxStat = Object.keys(powerStats).reduce((a, b) =>
    powerStats[a] > powerStats[b] ? a : b,
  );
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '7px',
        padding: '0.5rem',
        width: { xs: '90%', md: '50%' },
        justifyContent: 'space-around',
        backgroundColor: ' rgba(0, 0, 0, 0.8)',
        flexWrap: 'wrap',
      }}
    >
      <Box
        sx={{
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography sx={{ fontSize: { xs: '21px', md: '24px' } }}>
          Team Stats:
        </Typography>
        <Typography sx={{ fontSize: { xs: '17px', md: '20px' } }}>
          Altura Promedio: {averageHeight} cm
        </Typography>
        <Typography sx={{ fontSize: { xs: '17px', md: '20px' } }}>
          Peso Promedio: {averageWeight} kg
        </Typography>
        <Typography sx={{ fontSize: { xs: '17px', md: '20px' } }}>
          Tipo de Equipo: {maxStat}
        </Typography>
      </Box>
      <PowerBar
        intelligence={powerStats.intelligence}
        durability={powerStats.durability}
        combat={powerStats.combat}
        power={powerStats.power}
        speed={powerStats.speed}
        strength={powerStats.strength}
      />
    </Box>
  );
};

export default TeamStats;
