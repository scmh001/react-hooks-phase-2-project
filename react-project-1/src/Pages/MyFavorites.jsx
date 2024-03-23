import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'

export default function MyFavorites() {
    const [favoriteDrinks, setFavoriteDrinks] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/drinks/?favorite=true')
        .then(res => {
            if(res.ok){
                return(res.json())
            }else {
                return (console.error("Something went wrong..."))
            }
        })
        .then(favoriteData => setFavoriteDrinks(favoriteData))
    },[])
  
    return (
    <>
        <div class="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-2xl font-bold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              Favorites
        </div>
        {favoriteDrinks.map(drink => {
            const ingredientsArray = drink.ingredients.split(', ');
            return (
            <div className="card" key={drink.id}>
            <NavLink to={`/drink/${drink.id}`}>
              <h2>{drink.name}</h2>
            </NavLink>
            <img src={drink.image} alt={drink.name} className="drink-image" />
            <p className='cheers'>{drink.cheers} Cheers!</p>
            <p className='category'>{drink.category}</p>
            <ul>
              {ingredientsArray.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
              {/* <button className="del-btn" onClick={() => handleDeleteClick(toy)}>Donate to GoodWill</button> */}
            </ul>
          </div>)
        })}
    </>
  )
}
