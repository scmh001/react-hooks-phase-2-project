import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <>
		<NavLink to={'/'} >
        <h1 className="nav-bar-name">Drinks Galore (in development)</h1>
		</NavLink>
			{/* <button onClick={updateDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button> */}
			<div className="nav-link-bar">
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
			</div>
    </>
  )
}
