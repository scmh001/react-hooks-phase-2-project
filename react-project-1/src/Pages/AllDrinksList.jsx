import React, { useState } from 'react'; // Import useState
import DrinkCard from '../components/DrinkCard';
import Search from '../components/Search';
import { useOutletContext } from 'react-router-dom';

export default function AllDrinksList() {
  //receiving context from App.jsx
  const { allDrinks, search, categoryState, setCategoryState, handleAddCheers, handleSearch, handleUpdateFavorite } = useOutletContext();
  const [bgColor, setBgColor] = useState(''); // Initialize background color state

  //creates new const to .map over to render DrinkCard below
  //returns new array depending on category state and if name of plant matches search (using state)
  const filteredDrinks = allDrinks.filter(drink => {
    return ((categoryState === 0 || drink.category === categoryState) &&
    (search === '' || drink.name.toLowerCase().includes(search.toLowerCase())));
  });

  // Function to update background color based on category
  const updateBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <>
    <div className={`${bgColor}`} >
      <h2></h2>
      <Search search={search} handleSearch={handleSearch} />

      {/*buttons that change state of category and filter drinks */}
      <div className="filter space-x-2 flex justify-center ">
        <button 
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300" 
          onClick={() => { setCategoryState(0); updateBackgroundColor(''); }}>
            All
            </button>

        <button 
          className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300" 
          onClick={() => { setCategoryState("Alcoholic"); 
          updateBackgroundColor('bg-yellow-100'); }}>
            Alcoholic
          </button>

        <button 
          className="bg-gradient-to-r from-pink-400 to-red-500 hover:from-pink-500 hover:to-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300" 
          onClick={() => { setCategoryState("Non-Alcoholic"); updateBackgroundColor('bg-pink-100'); }}>
            Non-Alcoholic
            </button>

        <button 
          className="bg-gradient-to-r from-red-400 to-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300" 
          onClick={() => { setCategoryState("Coffee"); updateBackgroundColor('bg-red-100'); }}>
            Coffee
          </button>

        <button 
          className="bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300" 
          onClick={() => { setCategoryState("Smoothie"); updateBackgroundColor('bg-green-100'); }}>
            Smoothie
          </button>
      </div>
      
      <div className="content-center content-between ms-12 pl-12">
      {/*using passed down state via context, return an array of DrinkCards for each drink obj
        passing down drink obj and helper functions to set state in App.jsx as props  */}
        {filteredDrinks.map(drink => {
          return <DrinkCard 
            drink={drink} 
            handleAddCheers={handleAddCheers} 
            handleUpdateFavorite={handleUpdateFavorite} 
            key={drink.id} />
        })}
      </div>
    </div>

      <footer className="text-center text-gray-600 py-4 border-t-2 border-gray-200 mt-8">
        <div className="max-w-5xl m-auto">
          <p>© {new Date().getFullYear()} Drinks Galore. All rights reserved.</p>
          <p>Designed with 💖 by the Drinks Galore Team</p>
        </div>
      </footer>
    </>
  );
}