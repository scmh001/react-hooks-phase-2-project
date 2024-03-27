// DrinkVolumeBarGraph.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const DrinkVolumeBarGraph = ({ volumes, goalValue }) => { // Accept goalValue as a prop
  const labels = volumes.map((_, index) => `Drink ${index + 1}`);
  const data = {
    labels,
    datasets: [
      {
        label: 'Volume (ounces)',
        data: volumes.map(volume => Number(volume.ounces)),
        backgroundColor: [
          '#6366F1', // Indigo
          '#EF4444', // Red
          '#F59E0B', // Amber
          '#10B981', // Emerald
          '#6D28D9', // Purple
        ],
        borderColor: 'white',
        borderWidth: 1,
      },
      {
        label: 'Goal',
        data: Array(volumes.length).fill(goalValue), // Use goalValue here
        type: 'line', // This makes it a line chart
        borderColor: '#FFD700', // Gold color for the goal line
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(171,171,171,0.1)',
        },
        title: {
          display: true,
          text: 'Volume in Ounces',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y} oz`;
          },
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeOutCubic',
    },
  };

  return (
    <div className="h-96 bg-white shadow-md rounded-lg p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default DrinkVolumeBarGraph;