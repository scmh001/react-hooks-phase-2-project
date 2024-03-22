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

  // Render the component UI
  return (
    <div>
      <h2>Water Volume Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Volume (ounces)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {volumes.map((volume, index) => (
            <tr key={index}>
              <td>Drink {index + 1}</td>
              <td>
                <input
                  type="number"
                  placeholder="Enter volume"
                  value={volume.ounces}
                  onChange={(event) => handleVolumeChange(index, event)}
                />
              </td>
              <td>
                {volumes.length > 1 && (
                  <button onClick={() => removeVolumeInput(index)}>Remove</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{calculateTotalVolume()}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <button onClick={addVolumeInput}>Add another volume</button>
      <DrinkVolumeBarGraph volumes={volumes} />
    </div>
  );
};

export default DrinkVolumeInputTracker;