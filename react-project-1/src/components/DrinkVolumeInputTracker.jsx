import { useState } from 'react';
import DrinkVolumeBarGraph from './DrinkVolumeBarGraph';
const DrinkVolumeInputTracker = () => {
  const [volumes, setVolumes] = useState([{ ounces: '' }]);

  const handleVolumeChange = (index, event) => {
    const newVolumes = [...volumes];
    newVolumes[index].ounces = event.target.value;
    setVolumes(newVolumes);
  };

  const addVolumeInput = () => {
    setVolumes([...volumes, { ounces: '' }]);
  };

  const removeVolumeInput = (index) => {
    const newVolumes = [...volumes];
    newVolumes.splice(index, 1);
    setVolumes(newVolumes);
  };

  const calculateTotalVolume = () => {
    return volumes.reduce((total, current) => total + Number(current.ounces || 0), 0);
  };

  return (
    <div>
      <h2>Drink Volume Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Drink</th>
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