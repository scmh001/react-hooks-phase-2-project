import React, {useState, useEffect} from 'react'
import DrinkCard from '../components/DrinkCard'

export default function AllDrinksList() {
  const [allDrinks, setAllDrinks] = useState([])
  
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
  
 
 
 return (
    <>
      <h2>Drinks</h2>
      {allDrinks.map(drink => {
    return <DrinkCard drink={drink} handleAddCheers={handleAddCheers} key={drink.id} />
  })}
    </>
  )
}
