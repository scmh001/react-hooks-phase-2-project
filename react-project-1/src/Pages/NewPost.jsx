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
        navigate(`/drinks/${drinkId}`);
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
    <div>
      {successMessage && <div>{successMessage}</div>}
      <form id="drinksInputForm" onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
        </label>
        <label>
          Ingredients:
          <input type="text" value={ingredients} onChange={e => setIngredients(e.target.value)} />
        </label>
        <label>
          Image URL:
          <input type="text" value={image} onChange={e => setImage(e.target.value)} />
        </label>
        <label>
          History:
          <input type="text" value={historyState} onChange={e => setHistoryState(e.target.value)} />
        </label>
        <label>
          Instructions:
          <textarea value={instructions} onChange={e => setInstructions(e.target.value)} placeholder='Please separate instructions with a comma...' />
        </label>
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    </div>
  );
}

export default AddNewDrink;