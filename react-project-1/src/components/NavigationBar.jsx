import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to={'/'} className="text-xl font-bold">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse shadow-lg">
                 Drinks Galore 
        </h1>
        </NavLink>
        <div className="nav-link-bar flex space-x-4">
          <NavLink to={'/'} className="py-2 px-4 hover:bg-gray-700 rounded transition duration-300">
            Home
          </NavLink>
          <NavLink to={'/about'} className="py-2 px-4 hover:bg-gray-700 rounded transition duration-300">
            About
          </NavLink>
          <NavLink to={'/drinkslist'} className="py-2 px-4 hover:bg-gray-700 rounded transition duration-300">
            All Drinks
          </NavLink>
          <NavLink to={'/newpost'} className="py-2 px-4 hover:bg-gray-700 rounded transition duration-300">
            Add New Drink
          </NavLink>
          <NavLink to={'/drinktracker'} className="py-2 px-4 hover:bg-gray-700 rounded transition duration-300">
            Drink Tracker
          </NavLink>
		  <NavLink to={'/myfavorites'} className="py-2 px-4 hover:bg-gray-700 rounded transition duration-300">
            My Favorites
		  </NavLink>
        </div>
      </div>
    </nav>
  );
}