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
      <h2>All Drinks</h2>
      <Search search={search} handleSearch={handleSearch} />
      <div className="filter">
				<button onClick={() => setCategoryState(0)}>All</button>
				<button onClick={() => setCategoryState("Alcoholic")}>Alcoholic</button>
				<button onClick={() => setCategoryState("Non-Alcoholic")}>Non-Alcoholic</button>
				<button onClick={() => setCategoryState("Kids Drink")}>Kids Drink</button>
			</div>
      {filteredDrinks.map(drink => {
    return <DrinkCard drink={drink} handleAddCheers={handleAddCheers} handleUpdateFavorite={handleUpdateFavorite} key={drink.id} />
  })}
    </>
  )
}
