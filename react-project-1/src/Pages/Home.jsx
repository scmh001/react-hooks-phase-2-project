import {useState, useEffect} from 'react';
import DrinkCard from '../components/DrinkCard';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
  // State to hold the top five drinks
  const [topFive, setTopFive] = useState([])
  // Destructuring the context object to get allDrinks, handleAddCheers, and handleUpdateFavorite functions
  const {allDrinks, handleAddCheers, handleUpdateFavorite} = useOutletContext();

  // useEffect hook to fetch the top five drinks based on the number of cheers
  useEffect(() => {
    const fetchTopFive = async () => {
      // Fetching the top five drinks sorted by cheers in descending order and limiting the results to 5
      const response = await fetch('http://localhost:4000/drinks?_sort=-cheers&_limit=5');
      const data = await response.json();
      // Updating the topFive state with the fetched data
      setTopFive(data);
    };
    // Calling the fetchTopFive function
    fetchTopFive();
  }, [allDrinks]); // Dependency array includes allDrinks to refetch when allDrinks changes
  
  return (
    <>
    <div className="">
    {/* Title section with gradient text and animation */}
    <h1 className="text-4xl text-center lg:text-7xl font-extrabold bg-gradient-to-r from-slate-950 via-zinc-500 to-slate-950 text-transparent bg-clip-text animate-flip-up animate-duration-1500 animate-ease-out shadow-6xl transition-shadow duration-300 ease-in-out">
  The Top Shelf
</h1>
      {/* Container for the top five drinks */}
      <div className="place-content-center flex justify-center">
      {/* Mapping over the topFive state to render DrinkCard components for each drink */}
      {topFive.map(drink => {
        return (
        <DrinkCard drink={drink} handleAddCheers={handleAddCheers} handleUpdateFavorite={handleUpdateFavorite} key={drink.id} />
      )})}
       </div>
    </div>
    {/* Footer section with copyright and design credit */}
    <footer className="text-center text-gray-600 py-4 border-t-2 border-gray-200 mt-8">
        <div className="max-w-5xl m-auto">
          <p>© {new Date().getFullYear()} Drinks Galore. All rights reserved.</p>
          <p>Designed with 💖 by the Drinks Galore Team</p>
        </div>
      </footer>
    </>

  )
}