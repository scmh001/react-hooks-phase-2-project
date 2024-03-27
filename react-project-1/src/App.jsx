import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'


function App() {
  //states for data from db (allDrinks), making search controlled, and for category filtering, respectively
  const [allDrinks, setAllDrinks] = useState([])
  const [search, setSearch] = useState('')
  const [categoryState, setCategoryState] = useState(0)
  
  //initial fetch request for AllDrinks page sorting by most cheers
  useEffect(() => {
    fetch('http://localhost:4000/drinks?_sort=-cheers')
    .then(res => {
      if(res.ok){
        return (res.json())
      }else {
        return(console.error("Something went wrong..."))
      }
    })
    .then(drinkData => setAllDrinks(drinkData))
    .catch(error => console.error(error))
  }, [])

//helper function for POST request to update amount of cheers
  const handleAddCheers = (updatedDrink) => {
    setAllDrinks(allDrinks.map(drink => {
      if (drink.id === updatedDrink.id){
        return updatedDrink
      }else{
        return drink
      }
    }))
  }
  
  //helper function for POST request to update favorite or unfavorite
  const handleUpdateFavorite = (updatedDrink) => {
    setAllDrinks(allDrinks.map(drink => {
      if (drink.id === updatedDrink.id){
        return updatedDrink
      }else{
        return drink
      }
    }))
  }

  //helper function to set state of search (to make controlled)
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  
  return (
    <div>
       <NavigationBar />
       {/*provide context for all children of App (look at routes.jsx) to share state and functions
          also displays NavigationBar on all pages */}
       <Outlet context={{
        allDrinks, 
        setAllDrinks, 
        search, 
        setSearch, 
        categoryState, 
        setCategoryState, 
        handleAddCheers, 
        handleSearch, 
        handleUpdateFavorite
        }}/>
     
    </div>
  )
}


export default App
