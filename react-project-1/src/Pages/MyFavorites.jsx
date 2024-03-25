import React, {useEffect, useState} from 'react'
import { useOutletContext } from 'react-router-dom'
import DrinkCard from '../components/DrinkCard';

export default function MyFavorites() {
    const [favoriteDrinks, setFavoriteDrinks] = useState([])
    const {allDrinks, handleAddCheers, handleUpdateFavorite} = useOutletContext();

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
    },[allDrinks])
  
    return (
    <>
        <div className="animate-shake animate-once animate-duration-1000 animate-ease-out flex justify-center bg-gradient-to-r from-blue-500 to-teal-400 text-white text-2xl font-bold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out ">
              Favorites
        </div>
        <div className="flex justify-center">
        {favoriteDrinks.map(drink => {
            return (
              <DrinkCard drink={drink} handleAddCheers={handleAddCheers} handleUpdateFavorite={handleUpdateFavorite} key={drink.id} />
           )
        })}
        </div>
    </>
  )
}
