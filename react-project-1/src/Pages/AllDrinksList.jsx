import React, {useState, useEffect} from 'react'
import DrinkCard from '../components/DrinkCard'
import Search from '../components/Search'

export default function AllDrinksList() {
  const [allDrinks, setAllDrinks] = useState([])
  const [search, setSearch] = useState('')
  const [categoryState, setCategoryState] = useState(0)
  
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

  const filteredDrinks = allDrinks.filter(drink => {
    return ((categoryState === 0 || drink.category === categoryState) &&
    (search === '' || drink.name.toLowerCase().includes(search.toLowerCase())))
  })

 return (
    <>
      <h2></h2>
      <Search search={search} handleSearch={handleSearch} />
      <div className="filter space-x-2 my-4">
      <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300" onClick={() => setCategoryState(0)}>All</button>

      <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300" onClick={() => setCategoryState("Alcoholic")}>Alcoholic</button>

      <button className="bg-gradient-to-r from-pink-400 to-red-500 hover:from-pink-500 hover:to-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300" onClick={() => setCategoryState("Non-Alcoholic")}>Non-Alcoholic</button>

      <button className="bg-gradient-to-r from-purple-400 to-indigo-500 hover:from-purple-500 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300" onClick={() => setCategoryState("Kids Drink")}>Kids Drink</button>
      </div>
      {filteredDrinks.map(drink => {
    return <DrinkCard drink={drink} handleAddCheers={handleAddCheers} handleUpdateFavorite={handleUpdateFavorite} key={drink.id} />
  })}
    </>
  )
}
