import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


export default function IndividualDrinks() {
  const [drink, setDrink] = useState([])
  const { id } = useParams()
console.log(id)
  useEffect(() => {
    fetch(`http://localhost:4000/drinks/${id}`)
    .then(res => {
      if(res.ok){
        return (res.json())
      }else{
        return (console.error("Something went wrong..."))
      }
    })
    .then(drinkData => setDrink(drinkData))
  }, [])
  

  return (
    <div className="full-page">
        <h1>{drink.name}</h1>
    <img
    src={drink.image}
    alt={drink.name}
    className="drink-image"
    />
    <p>Ingredients: {drink.ingredients}</p>
    <p>Category: {drink.category}</p>
</div>
  )
}
