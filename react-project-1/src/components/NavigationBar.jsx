import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header>
        <h1>
				<span className="logo">{"//"}</span>
				Drinks Galore
			</h1>
			{/* <button onClick={updateDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button> */}

			<NavLink to={'/'} className="button">
				Home
			</NavLink>
			<NavLink to={'/about'} className="button" >
				About
			</NavLink>
			<NavLink to={'/drinkslist'} className="button" >
				All Drinks
			</NavLink>
            <NavLink to={'/newpost'} className="button" >
				Add New Drink
			</NavLink>
            <NavLink to={'/drinktracker'} className="button" >
				Drink Tracker
			</NavLink>

    </header>
  )
}
