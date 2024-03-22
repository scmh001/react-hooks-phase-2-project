import { useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom';

export default function DrinkCard({ drink, handleAddCheers, handleUpdateFavorite }) {
    const { name, image, cheers, ingredients, id, category, favorite } = drink;
    
    // State to manage the visibility of ingredients
    const [showIngredients, setShowIngredients] = useState(false);
    const [favorited, setFavorited] = useState(favorite)

    // Function to toggle the visibility state 
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

const handleFavorite = () => {
  setFavorited(()=> {
    if(favorited === 'true'){
      return 'false'
    }else {
      return 'true'
    }
  })
}
  
useEffect(()=> {
  fetch(`http://localhost:4000/drinks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          favorite: favorited
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
      handleUpdateFavorite(updatedDrink);
  })
},[favorited])

const ingredientsArray = ingredients.split(', '); 
  return (
    <div className="card">
      <NavLink to={`/drink/${id}`}>
        <h2>{name}</h2>
      </NavLink>
      <button className='favorite-btn' onClick={handleFavorite}>{favorited === 'true' ? 'Unfavorite' : 'Favorite'}</button>
      <img src={image} alt={name} className="drink-image" />
      <button className="like-btn" onClick={handleCheers}>{cheers} Cheers!</button>
          {/* Button to toggle ingredients visibility */}
      <button className="ingredients-btn" onClick={toggleIngredients}>Show Ingredients</button>
      <p className='category'>{category}</p>
      {showIngredients ? 
      (<ul>
        {ingredientsArray.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>)
      : (
        null
      )}
    </div>
  );
}

