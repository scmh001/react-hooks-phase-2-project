import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function AddNewDrink() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [image, setImage] = useState('');
  const [historyState, setHistoryState] = useState('');
  const [instructions, setInstructions] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;
    if (shouldNavigate) {
      timeoutId = setTimeout(() => {
        navigate(`/drink/${drinkId}`);
      }, 2000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [shouldNavigate, navigate, drinkId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const drinkData = {
      name,
      category,
      ingredients,
      image,
      cheers: 0,
      history: historyState,
      instructions,
      favorite: 'false',
    };

    try {
      const response = await fetch('http://localhost:4000/drinks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(drinkData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Drink added successfully with ID:', data.id);
        setSuccessMessage(`Drink added successfully! ID: ${data.id}`);
        setDrinkId(data.id);
        setShouldNavigate(true);
      } else {
        console.error('Error adding drink:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding drink:', error);
    }
  };

  return (
    <>
    <h1 className="liquid-header text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 animate-flip-up animate-once animate-duration-1000 animate-ease-out flex justify-center">
        Add a New Drink
    </h1>
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      {successMessage && <div className="p-3 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">{successMessage}</div>}
      <form id="drinksInputForm" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Name' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category:</label>
          <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder='Category' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Ingredients:</label>
          <input type="text" value={ingredients} onChange={e => setIngredients(e.target.value)} placeholder='Please separate ingredients with a period...' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL:</label>
          <input type="text" value={image} onChange={e => setImage(e.target.value)} placeholder='Image URL' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">History:<span className="italic"> (optional)</span></label>
          <input type="text" value={historyState} onChange={e => setHistoryState(e.target.value)} placeholder='History' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Instructions:<span className="italic"> (optional)</span></label>
          <textarea value={instructions} onChange={e => setInstructions(e.target.value)} placeholder='Please separate instructions with a period...' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
        </div>
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    </div>
    <footer className="text-center text-gray-600 py-4 border-t-2 border-gray-200 mt-8">
        <div className="max-w-5xl m-auto">
          <p>© {new Date().getFullYear()} Drinks Galore. All rights reserved.</p>
          <p>Designed with 💖 by the Drinks Galore Team</p>
        </div>
      </footer>
    </>
  );
}

export default AddNewDrink;