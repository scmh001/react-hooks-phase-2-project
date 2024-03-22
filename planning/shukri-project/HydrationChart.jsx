import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import DrinkVolumeInputTracker from './DrinkVolumeInputTracker'; 

const HydrationChart = ({ volumes }) => {
  // Calculate the total volume consumed
  const totalVolume = volumes.reduce((total, current) => total + Number(current.ounces || 0), 0);
  const goalVolume = 68; // Assuming the goal is 68oz
  const remainingVolume = goalVolume - totalVolume;
  const percentage = (totalVolume / goalVolume) * 100;

  const data = {
    datasets: [
      {
        data: [totalVolume, remainingVolume],
        backgroundColor: ['#3498db', '#ecf0f1'],
        borderColor: ['#3498db', '#ecf0f1'],
        borderWidth: 1,
        cutout: '80%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    circumference: 360,
    rotation: 270,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
      <div>{percentage.toFixed(0)}%</div>
      <div>{totalVolume.toFixed(1)}oz</div>
      <div>{remainingVolume.toFixed(1)}oz</div>
    </div>
  );
};

const App = () => {
  const [volumes, setVolumes] = useState(() => {
    const savedVolumes = localStorage.getItem('volumes');
    return savedVolumes ? JSON.parse(savedVolumes) : [{ ounces: '' }];
  });

  // ... rest of the DrinkVolumeInputTracker component code

  return (
    <div>
      <DrinkVolumeInputTracker volumes={volumes} setVolumes={setVolumes} />
      <HydrationChart volumes={volumes} />
    </div>
  );
};

export default App;