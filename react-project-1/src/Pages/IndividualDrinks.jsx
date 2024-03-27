import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function IndividualDrinks() {
 // Correctly initialize drink as an object with default values
 const [drink, setDrink] = useState({
    name: '',
    category: '',
    ingredients: '',
    image: '',
    history: '',
    instructions: '',
    funfacts: {},
 });

 const { id } = useParams();

 useEffect(() => {
    fetch(`http://localhost:4000/drinks/${id}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then(drinkData => setDrink(drinkData))
      .catch(error => console.error(error));
 }, [id]); // Add id to the dependency array to refetch if the id changes

 return (
    <div className="full-page bg-gray-100 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden ">
          <img
            src={drink.image}
            alt={drink.name}
            className="drink-image w-full h-64 object-cover"
          />
        </div>
        <div>
          <h1 className='text-4xl font-black mb-4 underline'>{drink.name}</h1>
          <h2 className="italic font-black shadow-2xl p-4 rounded-lg bg-white mb-20">Category: {drink.category}</h2>
          {drink.ingredients && (
            <div className="font-black shadow-2xl p-4 rounded-lg bg-white mb-20">
              <h2 className="text-2xl mb-2">Ingredients</h2>
              <ul className="list-disc list-inside">
                {drink.ingredients.split('. ').map((ingredient, index) => (
                 <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
          {drink.history && (
            <div className="font-black shadow-2xl p-4 rounded-lg bg-white mb-20">
              <h2 className="text-2xl mb-2">History</h2>
              <p>{drink.history}</p>
            </div>
          )}
          {drink.instructions && (
            <div className="font-black shadow-2xl p-4 rounded-lg bg-white mb-20">
              <h2 className="text-2xl mb-2">Instructions</h2>
              <ol className="list-inside list-decimal">
                {drink.instructions.split('. ').map((instruction, index) => (
                 <li key={index}>{instruction.charAt(0).toUpperCase() + instruction.slice(1)}</li>
                ))}
              </ol>
            </div>
          )}
          {drink.funfacts && Object.keys(drink.funfacts).length > 0 && (
            <div className="font-black shadow-2xl p-4 rounded-lg bg-white mb-20">
              <h2 className="text-2xl mb-2">Fun Facts</h2>
              <ul className="list-disc list-inside">
                {Object.values(drink.funfacts).map((fact, index) => (
                 <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
 );
}