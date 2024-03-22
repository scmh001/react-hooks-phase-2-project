import { useState } from 'react';
import { NavLink} from 'react-router-dom';

export default function DrinkCard({ drink, handleAddCheers }) {
    const { name, image, cheers, ingredients, id, category } = drink;
    // State to manage the visibility of ingredients
    const [showIngredients, setShowIngredients] = useState(false);

    // Function to toggle the visibility state //TODO Implement toggle feature of ingredients displayed  (do we want toggle feature?)
    const toggleIngredients = () => {
      setShowIngredients(prev => !prev);
    };

const handleCheers = () => {
    fetch(`http://localhost:4000/drinks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cheers: cheers + 1 
        })
    })
    .then(res => {
        if(res.ok){
            return (res.json())
        }else{
            return (console.error("Something went wrong..."))
        }
    })
    .then(updatedDrink => {
        handleAddCheers(updatedDrink);
    })

}
const ingredientsArray = ingredients.split(', '); //TODO Implement toggle feature of ingredients displayed  (do we want toggle feature?)

  return (
    <div className="card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <NavLink to={`/drink/${id}`} className="block hover:text-blue-500">
              <h2 className="text-2xl font-bold text-gray-800 p-4">{name}</h2>
          </NavLink>
        <img src={image} alt={name} className="drink-image w-full h-64 object-cover" />
          <button className="like-btn" onClick={handleCheers}>{cheers} Cheers!</button>
              {/* Button to toggle ingredients visibility */}
          <button className="ingredients-btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center justify-center mb-4" onClick={toggleIngredients}>
               Show Ingredients
          </button>
            <p className='category text-sm text-gray-600'>{category}</p>
              {showIngredients ? 
              (<ul className="list-disc pl-8 mt-4">
               {ingredientsArray.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
                     ))}
              </ul>)
              : (
                  null
               )}
      </div>
  );
}

