import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import DrinkCard from '../components/DrinkCard';

// MyFavorites component displays the user's favorite drinks
export default function MyFavorites() {
    // State to store the list of favorite drinks
    const [favoriteDrinks, setFavoriteDrinks] = useState([])
    // Destructuring necessary functions and data from the context provided by a parent route component
    const { allDrinks, handleAddCheers, handleUpdateFavorite } = useOutletContext();

    // useEffect hook to fetch favorite drinks from the server when the component mounts or allDrinks changes
    useEffect(() => {
        fetch('http://localhost:4000/drinks/?favorite=true')
        .then(res => {
            if(res.ok){
                // If the response is successful, parse the JSON data
                return(res.json())
            }else {
                // Log an error message if the fetch request fails
                return (console.error("Something went wrong..."))
            }
        })
        // Update the favoriteDrinks state with the fetched data
        .then(favoriteData => setFavoriteDrinks(favoriteData))
    },[allDrinks]) // Dependency array to re-run the effect if allDrinks changes
  
    return (
    <>
        {/* Header section for the Favorites page */}
        <div className="flex justify-center bg-gradient-to-r from-blue-500 to-teal-400 text-white text-2xl font-bold py-4 px-6  shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out ">
              Favorites
        </div>
        {/* Container for displaying each favorite drink using the DrinkCard component */}
        <div className="justify-center content-center content-between ms-12 pl-12">
        {favoriteDrinks.map(drink => {
            return (
              // DrinkCard component for each drink, passing necessary props for functionality
              <DrinkCard drink={drink} handleAddCheers={handleAddCheers} handleUpdateFavorite={handleUpdateFavorite} key={drink.id} />
           )
        })}
        </div>
        {/* Footer section */}
        <footer className="text-center text-gray-600 py-4 border-t-2 border-gray-200 mt-8">
        <div className="max-w-5xl m-auto">
          {/* Dynamic year in the copyright statement */}
          <p>© {new Date().getFullYear()} Drinks Galore. All rights reserved.</p>
          {/* Signature line */}
          <p>Designed with 💖 by the Drinks Galore Team</p>
        </div>
      </footer>
    </>
  )
}