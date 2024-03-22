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
        backgroundColor: [
          
          '#007bff', 
          '#dc3545', 
          '#ffc107', 
          '#28a745',
          'black', 
          
        ],
        borderColor: 'white', // Set the border color to white
        borderWidth: 1, // Set the border width
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

  return <div style={{ height: '375px' }}><Bar data={data} options={options} /></div>;
};

export default DrinkVolumeBarGraph;