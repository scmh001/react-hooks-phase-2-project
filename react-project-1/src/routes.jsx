import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import AllDrinksList from './Pages/AllDrinksList.jsx'
import NewPost from './Pages/NewPost.jsx'
import IndividualDrinks from './Pages/IndividualDrinks.jsx'
import DrinkVolumeInputTracker from './components/DrinkVolumeInputTracker.jsx'

const routes = [
  {
    path:"/",
    element:<App />,
    children: [
      {path: "/home", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/drinkslist", element: <AllDrinksList />},
      {path: "/newpost", element: <NewPost />},
      {path: "/drink:id", element: <IndividualDrinks />},
      {path: "/drinktracker", element: <DrinkVolumeInputTracker />}
    ],
  },
];