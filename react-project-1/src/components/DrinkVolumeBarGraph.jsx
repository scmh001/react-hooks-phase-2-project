
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
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default DrinkVolumeBarGraph;