import {useState, useEffect} from 'react';
import DrinkCard from '../components/DrinkCard';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const [topFive, setTopFive] = useState([])
  const {allDrinks, handleAddCheers, handleUpdateFavorite} = useOutletContext();


  useEffect(() => {
    const fetchTopFive = async () => {
      const response = await fetch('http://localhost:4000/drinks?_sort=-cheers&_limit=5');
      const data = await response.json();
      setTopFive(data);
    };
    fetchTopFive();
  }, [allDrinks]);
  
  return (
    <>
    <div className="">
    <h1 className="text-4xl text-center lg:text-6xl font-extrabold bg-gradient-to-r from-slate-950 via-zinc-500 to-slate-950 text-transparent bg-clip-text animate-flip-up animate-duration-1000 animate-ease-out shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
  The Top Shelf
</h1>
      <div className="place-content-center flex justify-center">
      {topFive.map(drink => {
        return (
        <DrinkCard drink={drink} handleAddCheers={handleAddCheers} handleUpdateFavorite={handleUpdateFavorite} key={drink.id} />
       
      )})}
       </div>
    </div>
    </>

  )
}
