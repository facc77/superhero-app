import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

interface PowerBarProps {
  intelligence: string;
  durability: string;
  combat: string;
  power: string;
  speed: string;
  strength: string;
}

const PowerBar: React.FC<PowerBarProps> = (powerStats) => {
  const { intelligence, durability, combat, power, speed, strength } =
    powerStats;

  return (
    <div className={`statsContainer `}>
      <Bar
        data={{
          labels: [
            'Combat',
            'Durability',
            'Intelligence',
            'Power',
            'Speed',
            'Strength',
          ],
          datasets: [
            {
              label: 'power stats',
              data: [
                parseInt(combat),
                parseInt(durability),
                parseInt(intelligence),
                parseInt(power),
                parseInt(speed),
                parseInt(strength),
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={200}
        width={300}
        options={{
          indexAxis: 'y',
          maintainAspectRatio: false,
        }}
      ></Bar>
    </div>
  );
};

export default PowerBar;
