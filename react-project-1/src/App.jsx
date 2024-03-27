import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'


function App() {
  const [allDrinks, setAllDrinks] = useState([])
  const [search, setSearch] = useState('')
  const [categoryState, setCategoryState] = useState(0)
  
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
  }, [])


  const handleAddCheers = (updatedDrink) => {
    setAllDrinks(allDrinks.map(drink => {
      if (drink.id === updatedDrink.id){
        return updatedDrink
      }else{
        return drink
      }
    }))
  }
  
  const handleUpdateFavorite = (updatedDrink) => {
    setAllDrinks(allDrinks.map(drink => {
      if (drink.id === updatedDrink.id){
        return updatedDrink
      }else{
        return drink
      }
    }))
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  
  return (
    <div>
       <NavigationBar />
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
