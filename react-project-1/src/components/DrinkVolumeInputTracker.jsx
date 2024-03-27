import { useState, useEffect } from 'react';
import DrinkVolumeBarGraph from './DrinkVolumeBarGraph';

// Component for tracking and displaying drink volumes
const DrinkVolumeInputTracker = () => {
  // State 'volumes' holds an array of drink volumes. Initializes from local storage or defaults to an initial value.
  const [volumes, setVolumes] = useState(() => {
    const savedVolumes = localStorage.getItem('volumes');
    return savedVolumes ? JSON.parse(savedVolumes) : [{ ounces: '' }];
  });

  // State for dynamically setting the goal value
  const [goalValue, setGoalValue] = useState(124);

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

  // Function to reset all volume input fields to initial state.
  const resetVolumeInputs = () => {
    setVolumes([{ ounces: '' }]);
  };

  // Function to calculate the total volume of all drinks.
  const calculateTotalVolume = () => {
    return volumes.reduce((total, current) => total + Number(current.ounces || 0), 0);
  };

  const totalVolume = calculateTotalVolume();
  const goalMet = totalVolume >= goalValue;

  // Render the UI
  return (
    <>
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Water Volume Tracker</h2>
      <div className="mb-4">
        <label htmlFor="goalInput" className="block mb-2">Goal Volume (ounces):</label>
        <input
          id="goalInput"
          type="number"
          className="border-2 border-blue-300 focus:border-blue-500 rounded-lg p-2 transition duration-200 ease-in-out"
          value={goalValue}
          onChange={(event) => setGoalValue(Number(event.target.value))}
          placeholder="Set your goal"
        />
      </div>
      {volumes.map((volume, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="number"
            className="border-2 border-blue-300 focus:border-blue-500 rounded-lg p-2 mr-2 transition duration-200 ease-in-out transform focus:scale-105"
            value={volume.ounces}
            onChange={(event) => handleVolumeChange(index, event)}
            placeholder="Enter volume in ounces"
          />
          <button onClick={() => removeVolumeInput(index)} className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition duration-150 ease-in-out">Remove</button>
        </div>
      ))}
      <button onClick={addVolumeInput} className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg my-4 transition duration-150 ease-in-out">Add Drink</button>
      <button onClick={resetVolumeInputs} className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-lg mx-2 my-4 transition duration-150 ease-in-out">Reset Fields</button>
      <DrinkVolumeBarGraph volumes={volumes} goalValue={goalValue} />
      <div className="mt-4">
        {goalMet ? (
          <p className="text-green-500 font-bold">Goal of {goalValue} ounces met!</p>
        ) : (
          <p className="text-red-500 font-bold">Goal not met. Keep going!</p>
        )}
      </div>
      <span className= "italic">For healthy individuals, the average daily water intake for men is about 15.5 cups (~124 ounces) and for women about 11.5 cups(~92 ounces). -- (health.harvard.edu 2023) </span>
    </div>
    </>
  );
};

export default DrinkVolumeInputTracker;