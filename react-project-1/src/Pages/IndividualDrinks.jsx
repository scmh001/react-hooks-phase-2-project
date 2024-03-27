import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function IndividualDrinks() {
  // State to store the drink details
  const [drink, setDrink] = useState([]);
  // Extracting the id parameter from the URL using useParams hook
  const { id } = useParams();

  // useEffect hook to fetch drink details based on the id from the URL
  useEffect(() => {
    fetch(`http://localhost:4000/drinks/${id}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          // Logging error to the console if the response is not ok
          return console.error("Something went wrong...");
        }
      })
      .then(drinkData => setDrink(drinkData)); // Setting the fetched drink data to the state
  }, [id]); // Dependency array with id to refetch when id changes

  return (
    <div className="full-page bg-gray-100 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          {/* Displaying drink image */}
          <img
            src={drink.image}
            alt={drink.name}
            className="drink-image w-full h-64 object-cover"
          />
        </div>
        <div>
          {/* Displaying drink name */}
          <h1 className='text-4xl font-black mb-4 underline'>{drink.name}</h1>
          {/* Displaying drink category */}
          <h2 className="italic font-black shadow-2xl p-4 rounded-lg bg-white mb-20">Category: {drink.category}</h2>
          {/* Displaying drink ingredients if available */}
          <div className="font-black shadow-2xl p-4 rounded-lg bg-white mb-20">
            <h2 className="text-2xl mb-2">Ingredients</h2>
            <ul className="list-disc list-inside">
              {drink.ingredients && drink.ingredients.split('. ').map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          {/* Conditionally rendering the history section if available */}
          {drink.history ?
            <div className="font-black font-sans shadow-2xl p-4 rounded-lg bg-white mb-20">
              <h2 className="text-2xl mb-2 ">History</h2>
              <p>{drink.history}</p>
            </div>
            :
            null
          }
          {/* Conditionally rendering the instructions section if available */}
          {drink.instructions ?
            <div className="font-black shadow-2xl p-4 rounded-lg bg-white font-sans">
              <h2 className="text-2xl mb-2 font-sans">Instructions</h2>
              <ol className="list-inside list-decimal">
                {drink.instructions && drink.instructions.split('. ').map((instruction, index) => (
                  <li key={index}>{instruction.charAt(0).toUpperCase() + instruction.slice(1)}</li>
                ))}
              </ol>
            </div>
            :
            null}
        </div>
      </div>
    </div>
  );
}
