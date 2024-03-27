import { useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom';

export default function DrinkCard({ drink, handleAddCheers, handleUpdateFavorite }) {
  //destructing passed props of drink  
  const { name, image, cheers, ingredients, id, category, favorite } = drink;
    
    // State to manage the visibility of ingredients
    const [showIngredients, setShowIngredients] = useState(false);
    const [favorited, setFavorited] = useState(favorite)

    // Function to toggle the visibility state 
    const toggleIngredients = () => {
      setShowIngredients(prev => !prev);
    };

  //PATCH request to update amount of cheers in state and db     
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

  //function that updates state of favorite and changes to string to be read in JSON
  const handleFavorite = () => {
    setFavorited(()=> {
      if(favorited === 'true'){
        return 'false'
      }else {
        return 'true'
      }
    })
  }
  
  //PATCH request that updates db and state of favorite 
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

  const baseButtonStyle = "font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out";

  //logic that splits ingredients at period to then render as ul
  const ingredientsArray = ingredients.split('. ');

  //logic that shortens name of drink and replaces with elipses after certain character count
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  const truncatedName = truncateString(name, 30);


  return (
    <div className="card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl m-4" title={name}>
      {/*image name and category will link to individual drink page  */}
      <NavLink to={`/drink/${id}`} className="block hover:text-blue-500">
        <img src={image} alt={name} className="drink-image w-full h-full object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800 ">{truncatedName}</h2>
          <p className='category text-sm text-gray-600 mb-2'>{category}</p>
        </div>
      </NavLink>

      <div className="px-4 pb-4">
        {/*button to handle change of state of favorite and PATCH request */}
        <button
          className={`${baseButtonStyle} bg-blue-500 hover:bg-blue-700 text-white transform hover:-translate-y-1 hover:scale-110 mb-2`}
          onClick={handleFavorite}>
          {favorited === 'true' ? '♥ Unfavorite' : '♡ Favorite'}
        </button>
        
        {/*button to handle incread of cheers and PATCH request */}
        <button className={`${baseButtonStyle} bg-red-500 hover:bg-red-600 text-white transform hover:-translate-y-1 hover:scale-110 mb-2`} onClick={handleCheers}>
          {cheers} Cheers!
        </button>
        
        {/*button to handle hide/show of ingredients with conditional rendering */}
        <button className={`${baseButtonStyle} bg-green-500 hover:bg-green-600 text-white transform hover:-translate-y-1 hover:scale-110 mb-4`} onClick={toggleIngredients}>
          {showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
        </button>
        {showIngredients && (
          <ul className="list-disc pl-8 mt-4">
            {ingredientsArray.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
        )}
      </div>

      {/*edit button that links to the EditDrink page */}
      <div className='edit-btn float-right'>
        <button className='edit'>
        <NavLink to={`/drink/${id}/edit`}>
          <img className='h-5 w-5 hover:opacity-25 transition-opacity duration-350' src='https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png'></img>
        </NavLink>
        </button>
      </div>
    </div>
  );
}
