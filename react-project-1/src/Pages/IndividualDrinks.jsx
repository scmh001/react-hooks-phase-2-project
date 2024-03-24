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
    <div className="full-page bg-gray-100 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={drink.image}
            alt={drink.name}
            className="drink-image w-full h-64 object-cover"
          />
        </div>
        <div>
          <h1 className='text-4xl font-black mb-4 underline'>{drink.name}</h1>
          <h2 className="italic font-black shadow-2xl p-4 rounded-lg bg-white mb-20">Category: {drink.category}</h2>
          <div className="font-black shadow-2xl p-4 rounded-lg bg-white mb-20">
           <h2 className="text-2xl mb-2">Ingredients</h2>
              <ul className="list-disc list-inside">
          {drink.ingredients && drink.ingredients.split(', ').map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
           ))}
             </ul>
            </div>
          <div className="font-black shadow-2xl p-4 rounded-lg bg-white">
            <h2 className="text-2xl mb-2">History</h2>
            <p>{drink.history ? drink.history : "No history available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
