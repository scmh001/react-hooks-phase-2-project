import DrinkCard from '../components/DrinkCard'
import Search from '../components/Search'
import { useOutletContext } from 'react-router-dom'

export default function AllDrinksList() {
 const {allDrinks, search, categoryState, setCategoryState, handleAddCheers, handleSearch, handleUpdateFavorite} = useOutletContext();

  const filteredDrinks = allDrinks.filter(drink => {
    return ((categoryState === 0 || drink.category === categoryState) &&
    (search === '' || drink.name.toLowerCase().includes(search.toLowerCase())))
  })

 return (
    <>
      <h2></h2>
      <Search search={search} handleSearch={handleSearch} />
      <div className="filter space-x-2 flex justify-center ">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300" onClick={() => setCategoryState(0)}>All</button>

        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300" onClick={() => setCategoryState("Alcoholic")}>Alcoholic</button>

        <button className="bg-gradient-to-r from-pink-400 to-red-500 hover:from-pink-500 hover:to-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300" onClick={() => setCategoryState("Non-Alcoholic")}>Non-Alcoholic</button>
      
        <button className="bg-gradient-to-r from-red-400 to-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300" onClick={() => setCategoryState("Coffee")}>Coffee</button>
      
        <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300" onClick={() => setCategoryState("Smoothie")}>Smoothie</button>
      </div>
      <div className="content-center content-between ms-12" >
      {filteredDrinks.map(drink => {
    return <DrinkCard drink={drink} handleAddCheers={handleAddCheers} handleUpdateFavorite={handleUpdateFavorite} key={drink.id} />
  })}
  </div>
    </>
  )
}
