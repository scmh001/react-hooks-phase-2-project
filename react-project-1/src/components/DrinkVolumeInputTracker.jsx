import { useState, useEffect } from 'react';
import DrinkVolumeBarGraph from './DrinkVolumeBarGraph';

// Component for tracking and displaying drink volumes
const DrinkVolumeInputTracker = () => {
  // State 'volumes' holds an array of drink volumes. Initializes from local storage or defaults to an initial value.
  const [volumes, setVolumes] = useState(() => {
    const savedVolumes = localStorage.getItem('volumes');
    return savedVolumes ? JSON.parse(savedVolumes) : [{ ounces: '' }];
  });

  // Effect hook to update local storage whenever 'volumes' state changes.
  useEffect(() => {
    localStorage.setItem('volumes', JSON.stringify(volumes));
  }, [volumes]);

  // Function to handle changes in volume input fields.
  const handleVolumeChange = (index, event) => {
    const newVolumes = [...volumes];
    newVolumes[index].ounces = event.target.value;
    setVolumes(newVolumes);
  };

  // Function to add a new volume input field.
  const addVolumeInput = () => {
    setVolumes([...volumes, { ounces: '' }]);
  };

  // Function to remove a volume input field.
  const removeVolumeInput = (index) => {
    const newVolumes = [...volumes];
    newVolumes.splice(index, 1);
    setVolumes(newVolumes);
  };

  // Function to calculate the total volume of all drinks.
  const calculateTotalVolume = () => {
    return volumes.reduce((total, current) => total + Number(current.ounces || 0), 0);
  };

  // Render the UI
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Water Volume Tracker</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 font-semibold">Drink</th>
              <th className="py-3 px-4 font-semibold">Volume (ounces)</th>
              <th className="py-3 px-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {volumes.map((volume, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">Drink {index + 1}</td>
                <td className="py-2 px-4">
                  <input
                    type="number"
                    placeholder="Enter volume"
                    value={volume.ounces}
                    onChange={(event) => handleVolumeChange(index, event)}
                    className="border rounded-lg py-2 px-4 w-full"
                  />
                </td>
                <td className="py-2 px-4">
                  {volumes.length > 1 && (
                    <button
                      onClick={() => removeVolumeInput(index)}
                      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red- transition duration-300"
                    >
                      Remove
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-100">
            <tr>
              <td className="py-3 px-4 font-semibold text-gray-">Total</td>
              <td className="py-3 px-4 font-semibold text-gray-">{calculateTotalVolume()}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <button
        onClick={addVolumeInput}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue- transition duration-300"
      >
        Add another volume
      </button>
      <DrinkVolumeBarGraph volumes={volumes} />
    </div>
  );
};

export default DrinkVolumeInputTracker;