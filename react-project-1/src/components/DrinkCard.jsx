import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function DrinkCard({ drink, handleAddCheers }) {
    const { name, image, cheers, ingredients, id } = drink;
    // State to manage the visibility of ingredients
    const [showIngredients, setShowIngredients] = useState(false);
  
    // Function to toggle the visibility state //TODO Implement toggle feature of ingredients displayed  (do we want toggle feature?)
    const toggleIngredients = () => {
      setShowIngredients(!showIngredients);
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
    <div className="card">
      <NavLink to={`/drink/${id}`}>
        <h2>{name}</h2>
      </NavLink>
      <img src={image} alt={name} className="drink-image" />
      <button className="like-btn" onClick={handleCheers}>{cheers} Cheers!</button>
          {/* Button to toggle ingredients visibility */}
          <button className="ingredients-btn">Show Ingredients</button>
      <ul>
        {ingredientsArray.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
        {/* <button className="del-btn" onClick={() => handleDeleteClick(toy)}>Donate to GoodWill</button> */}
      </ul>
    </div>
  );
}

