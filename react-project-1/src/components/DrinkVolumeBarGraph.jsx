import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DrinkVolumeBarGraph = ({ volumes }) => {
  const labels = volumes.map((_, index) => `Drink ${index + 1}`);
  const data = {
    labels,
    datasets: [
      {
        label: 'Volume (ounces)',
        data: volumes.map(volume => Number(volume.ounces)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Adjust aspect ratio
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true, // Display grid lines
          color: 'rgba(171,171,171,0.1)', // Grid line color
        },
        title: {
          display: true,
          text: 'Volume in Ounces', // Y-axis label
        },
      },
      x: {
        grid: {
          display: false, // Hide grid lines for x-axis
        },
      },
    },
    plugins: {
      legend: {
        display: true, // Display legend
        position: 'top', // Legend position
      },
      tooltip: {
        enabled: true, // Enable tooltips
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(context) {
            // Custom tooltip label
            return `${context.dataset.label}: ${context.parsed.y} oz`;
          },
        },
      },
    },
    animation: {
      duration: 1000, // Animation duration
      easing: 'easeOutCubic', // Animation easing function
    },
  };

  return <div style={{ height: '400px' }}><Bar data={data} options={options} /></div>;
};

export default DrinkVolumeBarGraph;