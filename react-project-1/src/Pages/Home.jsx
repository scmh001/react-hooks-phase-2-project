import {useState, useEffect} from 'react';
import DrinkCard from '../components/DrinkCard';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const [topSix, setTopSix] = useState([])
  const {allDrinks, handleAddCheers, handleUpdateFavorite} = useOutletContext();


  useEffect(() => {
    const fetchTopSix = async () => {
      const response = await fetch('http://localhost:4000/drinks?_sort=-cheers&_limit=5');
      const data = await response.json();
      setTopSix(data);
    };
    fetchTopSix();
  }, [allDrinks]);
  
  return (
    <>
      <h1 className="text-4xl text-center lg:text-6xl font-extrabold text-gradient bg-clip-text animate-bounce bg-gradient-to-r from-pink-500 to-yellow-500 shadow-xl">The Top Shelf</h1>
      <div className="content-center content-between ms-12">
      {topSix.map(drink => {
        return (
        <DrinkCard drink={drink} handleAddCheers={handleAddCheers} handleUpdateFavorite={handleUpdateFavorite} key={drink.id} />
       
      )})}
       </div>
    </>
  )
}
