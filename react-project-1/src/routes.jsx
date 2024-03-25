import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import AllDrinksList from './Pages/AllDrinksList.jsx'
import AddNewDrinkPage from './Pages/AddNewDrinkPage.jsx' // Make sure this import path is correct
import IndividualDrinks from './Pages/IndividualDrinks.jsx'
import DrinkVolumeInputTracker from './components/DrinkVolumeInputTracker.jsx'
import MyFavorites from './Pages/MyFavorites.jsx'
import MemoryGame from './components/MemoryGame.jsx'

const routes = [
  {
    path:"/",
    element:<App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/drinkslist", element: <AllDrinksList />},
      {path: "/addnewdrink", element: <AddNewDrinkPage />}, // Changed from /newpost to /addnewdrink
      {path: "/drink/:id", element: <IndividualDrinks />},
      {path: "/drinktracker", element: <DrinkVolumeInputTracker />},
      {path: "/myfavorites", element: <MyFavorites />},
      {path: "/memorygame", element: <MemoryGame />}
    ],
  },
];

export default routes