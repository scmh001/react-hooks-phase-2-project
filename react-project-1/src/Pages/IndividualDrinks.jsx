import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


export default function IndividualDrinks() {
  const [drink, setDrink] = useState([])
  const { id } = useParams()

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
        <div className="rounded-lg overflow-hidden ">
          <img
            src={drink.image}
            alt={drink.name}
            className="drink-image w-full h-64 object-cover"
          />
        </div>
        <div>
          <h1 className='text-4xl font-black mb-4 underline'>{drink.name}</h1>
          <h2 className="italic font-black shadow-2xl p-4 rounded-lg bg-white mb-10">Category: {drink.category}</h2>
          <div className="font-black shadow-2xl p-4 rounded-lg bg-white mb-5">
           <h2 className="text-2xl mb-2">Ingredients</h2>
              <ul className="list-disc list-inside">
          {drink.ingredients && drink.ingredients.split('. ').map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
           ))}
             </ul>
            </div>

            {drink.instructions ?   
          <div className="font-black shadow-2xl p-3 rounded-lg mb-12 bg-white">
            <h2 className="text-2xl mb-2">Instructions</h2>
            
          
            <ol className="list-inside list-decimal">
          {drink.instructions && drink.instructions.split('. ').map((instruction, index) => (
            <li key={index}>{instruction.charAt(0).toUpperCase() + instruction.slice(1)}</li>
           ))}
             </ol> 
          </div>
          :
          null}
          
          {drink.history ?  
          <div className="font-black shadow-2xl p-3 rounded-lg bg-white mb-12">
            <h2 className="text-2xl mb-2">History</h2>
            <p>{drink.history}</p>
          </div>
          : 
          null
          }

          {drink.funfacts && Object.keys(drink.funfacts).length > 0 && (
            <div className="font-black shadow-2xl p-4 rounded-lg bg-white mb-10">
              <h2 className="text-2xl mb-2">Fun Facts</h2>
              <ul className="list-disc list-inside">
                {Object.values(drink.funfacts).map((fact, index) => (
                 <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
