import React, {useState, useEffect} from 'react'
import DrinkCard from '../components/DrinkCard'

export default function AllDrinksList() {
  const [allDrinks, setAllDrinks] = useState([])
  
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

  const drinkList = allDrinks.map(drink => {
    return <DrinkCard drink={drink} />
  })
 console.log(drinkList)
  return (
    <>
      <h2>Drinks</h2>
      {drinkList}
    </>
  )
}
