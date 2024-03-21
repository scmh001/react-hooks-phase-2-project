import React, {useState, useEffect} from 'react'
import DrinkCard from '../components/DrinkCard'
import Search from '../components/Search'

export default function AllDrinksList() {
  const [allDrinks, setAllDrinks] = useState([])
  const [search, setSearch] = useState('')
  
  //TODO look into proxy
  useEffect(() => {
    fetch('http://localhost:4000/drinks')
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
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredDrinks = allDrinks.filter(drink => {
    if(drink.name.toLowerCase().includes(search.toLowerCase())){
      return true
    }else {
      return false
    }
  })

 return (
    <>
      <h2>Drinks</h2>
      <Search search={search} handleSearch={handleSearch} />
      {filteredDrinks.map(drink => {
    return <DrinkCard drink={drink} handleAddCheers={handleAddCheers} key={drink.id} />
  })}
    </>
  )
}
